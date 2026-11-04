import { generateTestUsers } from "./generators.js";
import { createUserReport } from "./reporters.js";

function main() {
  // Generate test users (7 valid, 3 invalid)
  const users = generateTestUsers();

  const report = createUserReport(users);

  console.log("=== TEST DATA REPORT ===");
  console.log(`\nTotal users: ${report.totalUsers}`);
  console.log(`Valid users: ${report.validCount}`);
  console.log(`Invalid users: ${report.invalidCount}`);
  console.log("\nInvalid users:");
  console.log(`- ${report.invalidUsernames.join(", ")}`);
  console.log("\n==================");
}

main();