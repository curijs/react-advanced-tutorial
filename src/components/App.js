import React from "react";
import { useCuri } from "@curi/react-dom";

import NavMenu from './NavMenu';

export default function App() {
  const { response, router } = useCuri();

  const { body:Body } = response;
  return (
    <div>
      <header>
        <NavMenu />
      </header>
      <main>
        <Body response={response} router={router} />
      </main>
    </div>
  );
}