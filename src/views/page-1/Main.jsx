import {
  Lucide,
  Tippy,
  TomSelect,
  Alert,
  ClassicEditor,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import { useState } from "react";

import { Heading, Questions } from "./components/";

function Main() {
  const [subcategory, setSubcategory] = useState([]);
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");

  return (
    <>
      <Heading />

      <div className="grid grid-cols-11 gap-x-6 mt-5 pb-20">
        {/* BEGIN: Notification */}
        <div className="intro-y col-span-11 2xl:col-span-9">
          {/* BEGIN: Product Variant (Details) */}
          <div className="intro-y box p-5 mt-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="mt-5">
                {/* Questionnaire builder starts here */}
                <Questions />

                {/* Questionnaire builder ends here */}
              </div>
            </div>
          </div>
          {/* END: Product Variant (Details) */}
        </div>
      </div>
    </>
  );
}

export default Main;
