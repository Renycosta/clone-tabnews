test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  
  expect(response.status).toBe(200);
});

test("GET to /api/v1/status should return update_at has a date", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  
  expect(responseBody.update_at).toBeDefined()
});

test("GET to /api/v1/status should't return update_at has null", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  
  const parsedUpdateAt = new Date(responseBody.update_at).toISOString()
  
  expect(responseBody.update_at).toEqual(parsedUpdateAt)
});

test("GET to /api/v1/status should return the version of postgres", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  
  expect(responseBody.dependecies.database.version).toEqual("16.11 (f45eb12)")
});

test("GET to /api/v1/status should return the max_connection of postgres", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  
  expect(responseBody.dependecies.database.max_connections).toEqual(901)
});

test("GET to /api/v1/status should return the opened_connection of postgres", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  
  expect(responseBody.dependecies.database.opened_connections).toEqual(1)
});
