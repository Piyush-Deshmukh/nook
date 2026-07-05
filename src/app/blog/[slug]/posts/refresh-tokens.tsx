// import Image from "next/image";
// import plane from "@/public/plane.webp";
import type { BlogPost } from "../page";

export const refreshTokensBlog: BlogPost = {
  title: "Refresh Token",
  date: "2026-21-02",
  description: "Implementing Refresh Tokens Logic in a MERN app",
  // ogImage: "/plane.webp",
  content: (
    <>
      <div className="flex flex-col gap-1.5 mb-4">
        <p>today i finally implemented refresh tokens properly.</p>
        <p>
          i had known the concept for a while — access token expires fast,
          refresh token lives longer, rotate when needed.
        </p>
        <p>
          but knowing something conceptually and actually wiring it into a real
          project are two different things.
        </p>
        <p>
          i needed this for a project i’m currently building. login was working.
          jwt was working. protected routes were working.
        </p>
        <p>but everything broke the moment the access token expired.</p>
        <p>that’s when things got interesting.</p>
      </div>

      <section className="flex flex-col gap-1.5 mb-4">
        <h2 className="font-semibold">the problem with “just jwt”</h2>
        <div className="mb-2">
          <p>initially, my auth flow looked simple:</p>
          <ul className="ml-1 my-1.5">
            <li>- user logs in </li>
            <li>- server issues jwt access token</li>
            <li>- client stores it</li>
            <li>- protected routes verify it</li>
          </ul>
          <p>works great — until it expires.</p>
        </div>
        <div>
          <p>when the token expired:</p>
          <ul className="ml-1 my-1.5">
            <li>- api calls started failing </li>
            <li>- user got logged out abruptly</li>
            <li>- bad experience</li>
          </ul>
          <p className="mb-2">
            i didn’t want users to re-login every 15 minutes.
          </p>
          <p>that’s where refresh tokens come in.</p>
        </div>
      </section>

      <section className="flex flex-col gap-1.5 mb-4">
        <h2 className="font-semibold">the idea that finally clicked</h2>
        <div className="mb-2">
          <p>the clean mental model is this:</p>
          <div className="ml-1 my-1.5">
            <p className="font-medium">access token</p>
            <ul>
              <li>- short lived (e.g. 15 min)</li>
              <li>- used for every request</li>
              <li>- stored in memory (or http-only cookie)</li>
            </ul>
          </div>

          <div className="ml-1 my-1.5">
            <p className="font-medium">refresh token</p>
            <ul>
              <li>- long lived (e.g. 7 days)</li>
              <li>- used only to get a new access token</li>
              <li>- stored securely (http-only cookie ideally)</li>
              <li>- stored in database</li>
            </ul>
          </div>

          <p>access tokens prove identity.</p>
          <p>refresh tokens renew identity.</p>

          <p className="mt-2">
            once that separation made sense, implementation became mechanical.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-1.5 mb-4">
        <div className="mb-2">
          <h3 className="font-semibold">1. login route</h3>
          <p>on successful login:</p>
          <ul className="list-disc pl-6 my-1.5">
            <li>generate access token</li>
            <li>generate refresh token</li>
            <li>store refresh token in database</li>
            <li>send access token in response</li>
            <li>send refresh token in http-only cookie</li>
          </ul>
          <pre className="bg-neutral-100 text-sm p-4 rounded-lg overflow-x-auto">
            {`const accessToken = jwt.sign(
  { userId: user._id },
  process.env.ACCESS_SECRET,
  { expiresIn: "15m" }
);

const refreshToken = jwt.sign(
  { userId: user._id },
  process.env.REFRESH_SECRET,
  { expiresIn: "7d" }
);

user.refreshToken = refreshToken;
await user.save();

res
  .cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  })
  .json({ accessToken });`}
          </pre>
          <p>
            the access token is short. the refresh token stays in the cookie.
          </p>
        </div>

        <div className="mb-2">
          <h3 className="font-medium">2. middleware for protected routes</h3>

          <pre className="bg-neutral-100 text-sm p-4 rounded-lg overflow-x-auto">
            {`const token = req.headers.authorization?.split(" ")[1];

if (!token) return res.status(401).json({ message: "unauthorized" });

jwt.verify(token, process.env.ACCESS_SECRET, (err, decoded) => {
  if (err) return res.status(403).json({ message: "invalid token" });
  req.user = decoded;
  next();
});`}
          </pre>

          <p>nothing fancy here.</p>
        </div>

        <div className="mb-2">
          <h3 className="font-medium">3. refresh route (the important part)</h3>
          <div className="flex flex-col gap-2">
            <p>when access token expires, frontend calls:</p>

            <pre className="bg-neutral-100 text-sm p-4 rounded-lg">
              POST /api/auth/refresh
            </pre>

            <p className="text-neutral-800">server logic:</p>

            <ul className="list-disc pl-6 my-1.5">
              <li>verify refresh token</li>
              <li>check it against database</li>
              <li>generate new access token</li>
              <li>generate new refresh token</li>
              <li>replace old refresh token in database</li>
              <li>overwrite cookie</li>
            </ul>

            <pre className="bg-neutral-100 text-sm p-4 rounded-lg overflow-x-auto">
              {`const token = req.cookies.refreshToken;
if (!token) return res.status(401).json({ message: "no token" });

const decoded = jwt.verify(token, process.env.REFRESH_SECRET);

const user = await User.findById(decoded.userId);
if (!user || user.refreshToken !== token) {
  return res.status(403).json({ message: "invalid refresh token" });
}

// rotate tokens
const newAccessToken = jwt.sign(
  { userId: user._id },
  process.env.ACCESS_SECRET,
  { expiresIn: "15m" }
);

const newRefreshToken = jwt.sign(
  { userId: user._id },
  process.env.REFRESH_SECRET,
  { expiresIn: "7d" }
);

user.refreshToken = newRefreshToken;
await user.save();

res
  .cookie("refreshToken", newRefreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  })
  .json({ accessToken: newAccessToken });`}
            </pre>

            <p className="flex flex-col gap-1.5">
              <span>why rotate?</span> because if a refresh token gets stolen,
              it becomes useless after one use.
              <span>security is about reducing the blast radius.</span>
            </p>
          </div>
        </div>

        <div className="mb-2">
          <h3 className="font-semibold">
            4. logout route (invalidate old refresh token)
          </h3>
          <div className="flex flex-col gap-2">
            <p>logout should not just “delete token on frontend”.</p>
            <p>it should:</p>
            <ul className="list-disc pl-6 my-1.5">
              <li>clear cookie</li>
              <li>remove refresh token from database</li>
            </ul>
            <pre className="bg-neutral-100 text-sm p-4 rounded-lg overflow-x-auto">
              {`const token = req.cookies.refreshToken;

if (token) {
  const decoded = jwt.verify(token, process.env.REFRESH_SECRET);
  const user = await User.findById(decoded.userId);

  if (user) {
    user.refreshToken = null;
    await user.save();
  }
}

res.clearCookie("refreshToken").json({ message: "logged out" });`}
            </pre>
            <p>now that session is truly dead.</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-1.5 mb-4">
        <h3 className="font-semibold">Frontend</h3>
        <p className="flex flex-col gap-1">
          axios interceptor if any request returns 401:
        </p>
        <ul className="list-disc pl-6 my-1.5">
          <li>call refresh endpoint</li>
          <li>update access token</li>
          <li>retry original request</li>
        </ul>
        <pre className="bg-neutral-100 text-sm p-4 rounded-lg overflow-x-auto">
          {`axios.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const res = await axios.post("/api/auth/refresh", {}, {
        withCredentials: true
      });

      const newAccessToken = res.data.accessToken;

      originalRequest.headers.Authorization = \`Bearer \${newAccessToken}\`\;

      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);
`}
        </pre>
      </section>

      <section className="flex flex-col gap-1.5">
        <h3 className="font-semibold">
          what changed after implementing rotation
        </h3>
        <div className="mb-2">
          <p>before:</p>
          <ul className="list-disc pl-6 my-1.5">
            <li>sessions expired awkwardly</li>
            <li>security was basic</li>
          </ul>
        </div>
        <div className="mb-2">
          <p>after:</p>
          <ul className="list-disc pl-6 my-1.5">
            <li>expired access tokens renew silently</li>
            <li>refresh tokens rotate logout</li>
            <li>truly invalidates session</li>
          </ul>
        </div>
        <p>it feels more like a production system now.</p>
      </section>
    </>
  ),
};
