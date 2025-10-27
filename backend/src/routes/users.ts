import express from "express";
import { db } from "../data/db.js";
import { ScanCommand, PutCommand } from "@aws-sdk/lib-dynamodb";

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    console.log("🔍 Fetching user profiles from DynamoDB...");

    const command = new ScanCommand({
      TableName: "chappy",
      FilterExpression: "begins_with(pk, :userPrefix) AND begins_with(sk, :profilePrefix)",
      ExpressionAttributeValues: {
        ":userPrefix": "USER#",
        ":profilePrefix": "PROFILE#",
      },
    });

    const result = await db.send(command);
    console.log("📊 Filtered user profiles:", JSON.stringify(result.Items, null, 2));

    res.json(result.Items);
  } catch (error) {
    console.error("❌ Error fetching user profiles:", error);
    res.status(500).json({
      error: "Failed to fetch user profiles",
      details: error instanceof Error ? error.message : error,
    });
  }
});




export default router;
