import { defineEventHandler } from 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/h3/dist/index.mjs';

const login_post = defineEventHandler(async (event) => {
  const body = await useBody(event);
  if (body.email === "admin@example.com" && body.password === "secret") {
    return {
      data: {
        user: {
          name: "Admin",
          email: body.email
        },
        token: "TOKEN1234#"
      }
    };
  }
  return {
    error: {
      message: "Unauthenticated"
    }
  };
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
