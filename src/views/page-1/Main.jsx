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

function Main() {
  const [subcategory, setSubcategory] = useState([]);
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");

  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Build Questionnaire</h2>
      </div>
      <div className="grid grid-cols-11 gap-x-6 mt-5 pb-20">
    
       
        {/* BEGIN: Notification */}
        <div className="intro-y col-span-11 2xl:col-span-9">
          
        
         
          {/* BEGIN: Product Variant (Details) */}
          <div className="intro-y box p-5 mt-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="mt-5">
                
                {/* Questionnaire builder starts here */}
                <div className="form-inline items-start flex-col xl:flex-row mt-2 pt-2 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Question 1</div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Question note
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <div className="relative pl-5 pr-5 xl:pr-10 py-10 bg-slate-50 dark:bg-transparent dark:border rounded-md">
                      <a
                        href=""
                        className="text-slate-500 absolute top-0 right-0 mr-4 mt-4"
                      >
                        <Lucide icon="X" className="w-5 h-5" />
                      </a>
                      <div>
                        <div className="form-inline mt-5 first:mt-0">
                          <label className="form-label sm:w-20">Name</label>
                          <div className="flex items-center flex-1 xl:pr-20">
                            <div className="input-group flex-1">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="question 1"
                              />
                              
                            </div>
                          </div>
                        </div>

                        <div className="form-inline mt-5 first:mt-0">
                          <label className="form-label sm:w-20">Title</label>
                          <div className="flex items-center flex-1 xl:pr-20">
                            <div className="input-group flex-1">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                              />
                              
                            </div>
                          </div>
                        </div>

                        <div className="form-inline mt-5 first:mt-0">
                          <label className="form-label sm:w-20">Description</label>
                          <div className="flex items-center flex-1 xl:pr-20">
                            <div className="input-group flex-1">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Color"
                              />
                              
                            </div>
                          </div>
                        </div>

                        <div className="form-inline mt-5 first:mt-0">
                          <label className="form-label sm:w-20">Type</label>
                          <div className="flex items-center flex-1 xl:pr-20">
                            <div className="input-group flex-1">
                            <div className="w-full mt-3 xl:mt-0 flex-1">
                                <select id="tyoe" className="form-select">
                                  
                                    <option key={1} value="Text">
                                        Text
                                    </option>
                                    <option key={2} value="Number">
                                        Number
                                    </option>
                               
                                </select>
                             </div>
                              
                            </div>
                          </div>
                        </div>

                        <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Skip Logic</div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        instructions
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <div className="flex flex-col sm:flex-row">
                      <div className="form-check mr-4">
                        <input
                          id="shipping-service-standard"
                          className="form-check-input"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-chris-evans"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="shipping-service-standard"
                        >
                          CanSkipNextQues
                        </label>
                      </div>
                      <div className="form-check mr-4 mt-2 sm:mt-0">
                        <input
                          id="shipping-service-custom"
                          className="form-check-input"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-liam-neeson"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="shipping-service-custom"
                        >
                          Skipable
                        </label>
                      </div>
                    </div>
                    <div className="leading-relaxed text-slate-500 text-xs mt-3">
                     Choose canSkipNextQuestion for the parent and skipable for the child
                      <a className="text-primary font-medium" href="">
                       Docs
                      </a>
                    </div>
                  </div>
                </div>
                       
                        {/* <div className="xl:ml-20 xl:pl-5 xl:pr-20 mt-5 first:mt-0">
                          <button className="btn btn-outline-primary border-dashed w-full">
                            <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add
                            New Option
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:ml-64 xl:pl-10 mt-2 pt-2 first:mt-0 first:pt-0">
                  <button className="btn py-3 btn-outline-secondary border-dashed w-full">
                    <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add Question
                  </button>
                </div>

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
