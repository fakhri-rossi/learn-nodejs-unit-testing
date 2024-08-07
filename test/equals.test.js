test("Test toBe", () => {
  const name = "Eko";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Eko");
});

test("Test toEqual", () => {
  let person = { id: "rossi" };
  Object.assign(person, { name: "Rossi" });

  expect(person).toEqual({ id: "rossi", name: "Rossi" });
});
