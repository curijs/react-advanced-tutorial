import React from "react";
import { useResponse } from "@curi/react-dom";

import NavMenu from './NavMenu';

export default function App() {
  const { response } = useResponse();

  const { body:Body } = response;
  return (
    <div>
      <header>
        <NavMenu />
      </header>
      <main>
        <Body response={response} />
      </main>
    </div>
  );
}