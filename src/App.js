// import React, { useState } from "react";
// import JSONViewer from "./JSONViewer";

// const App = () => {
//   const [userId, setUserId] = useState("");
//   const jsonData = {
//     name: "John Doe",
//     age: 30,
//     hobbies: ["programming", "reading", "gaming"],
//     address: {
//       street: {
//         place: "rinlk",
//         city: "djjsh"
//       },
//       city: "New York",
//       country: "USA"
//     }
//   };

//   const userIdHandler = (e) => {
//     setUserId(e.target.value);
//   };

//   const clickHandler = () => {

//   }

//   return (
//     <div>
//       <h1>JSON Viewer</h1>
//       <input
//         type="text"
//         placeholder="user id"
//         onChange={userIdHandler}
//         value={userId}
//       />
//       <button onClick={clickHandler}>fetch data</button>
//       <JSONViewer userId={userId} data={jsonData} />
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import { ChakraProvider, Input } from "@chakra-ui/react";
import { Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import JSONViewer from "./JSONViewer";

const App = () => {
  const [userId, setUserId] = useState("");
  const jsonData = {
    contact_list: {
      exclude: false
    },
    flow: {
      children: {
        _: {
          children: {},
          data: {
            id: "99bd8bcab24bf46777bceab5e80dad15",
            action: "compose",
            callerid_match_login: false,
            interdigit_timeout: 2000,
            max_message_length: 500,
            single_mailbox_login: false
          },
          module: "voicemail"
        }
      },
      data: {
        can_call_self: false,
        timeout: 20,
        id: "92bc859c05939e494acab20a0e721c9e",
        delay: 0,
        strategy: "simultaneous",
        skip_module: true
      },
      module: "user"
    },
    name: "Ramen Romana SmartPBX's Callflow",
    numbers: ["1000", "+13134840726"],
    owner_id: "92bc859c05939e494acab20a0e721c9e",
    type: "mainUserCallflow",
    ui_metadata: {
      version: "5.1-11",
      ui: "monster-ui",
      origin: "voip"
    },
    patterns: [],
    metadata: {
      "92bc859c05939e494acab20a0e721c9e": {
        name: "Ramen Romana",
        pvt_type: "user"
      },
      "99bd8bcab24bf46777bceab5e80dad15": {
        name: "Ramen Romana's VMBox",
        pvt_type: "vmbox"
      }
    },
    id: "375ce4b8648f2264109069efb415168b",
    _read_only: {
      modified: 63848463212,
      id: "375ce4b8648f2264109069efb415168b",
      created: 63845700675
    }
  };

  const handleInputChange = (event) => {
    setUserId(event.target.value);
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <h1>JSON Viewer</h1>
        <Input type="text" value={userId} onChange={handleInputChange} />
        {userId && <JSONViewer data={jsonData} userId={userId} />}
      </Box>
    </ChakraProvider>
  );
};

export default App;
