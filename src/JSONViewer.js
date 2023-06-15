import React, { useState, useEffect } from "react";
import { Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";

const JSONViewer = ({ userId, data }) => {
  const [jsonData, setJsonData] = useState(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  const [expandedKeys, setExpandedKeys] = useState([]);

  const toggleExpand = (key) => {
    if (expandedKeys.includes(key)) {
      setExpandedKeys(expandedKeys.filter((k) => k !== key));
    } else {
      setExpandedKeys([...expandedKeys, key]);
    }
  };

  const renderJSON = (obj, parentKey = "") => {
    if (typeof obj === "object") {
      return (
        <UnorderedList ml={4} mt={2} listStyleType="none">
          {Object.entries(obj).map(([key, value]) => {
            const fullKey = parentKey ? `${parentKey}.${key}` : key;
            const isExpanded = expandedKeys.includes(fullKey);
            const hasNestedObjects = typeof value === "object";

            return (
              <ListItem key={fullKey}>
                <Text
                  as="span"
                  fontWeight="bold"
                  cursor={hasNestedObjects ? "pointer" : "default"}
                  onClick={() => hasNestedObjects && toggleExpand(fullKey)}
                >
                  {key}:
                </Text>{" "}
                {isExpanded && hasNestedObjects ? (
                  renderJSON(value, fullKey)
                ) : (
                  <Text as="span">{value.toString()}</Text>
                )}
              </ListItem>
            );
          })}
        </UnorderedList>
      );
    } else {
      return <Text as="span">{obj.toString()}</Text>;
    }
  };

  return (
    <Box mt={4} p={4} borderWidth="1px" borderRadius="md">
      {jsonData ? renderJSON(jsonData) : <Text>Loading data...</Text>}
    </Box>
  );
};

export default JSONViewer;
