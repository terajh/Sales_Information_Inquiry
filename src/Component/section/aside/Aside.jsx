import React from 'react';
import { Nav } from "react-bootstrap";
import './Aside.css';
// eslint-disable-next-line

const Aside = () => {
    return (
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
            <div className="sidebar-sticky"></div>
            <div class="leftsidebar_accordion_panel show" id="img_fn_list_panel">
                <div id="project_info_panel">
                    <div class="row">
                        <span class="col">Name:</span>
                        <span class="col">
                            <input type="text" value="" onchange="project_on_name_update(this)" id="project_name" title="VIA project name" />
                        </span>    
                    </div>
                </div>
                <div id="project_tools_panel">
                    <div class="button_panel">
                        <select id="filelist_preset_filters_list" onchange="img_fn_list_onpresetfilter_select()" title="Filter file list using predefined filters">
                            <option value="all">All files</option>
                            <option value="files_without_region">Show files without regions</option>
                            <option value="files_missing_region_annotations">Show files missing region annotations</option>
                            <option value="files_missing_file_annotations">Show files missing file annotations</option>
                            <option value="files_error_loading">Files that could not be loaded</option>
                            <option value="regex">Regular Expression</option>
                        </select>
                        <input type="text" placeholder="regular expression" oninput="img_fn_list_onregex()" id="img_fn_list_regex" title="Filter using regular expression"/>
                    </div>
                </div>

                <div id="img_fn_list"></div>
            </div>
        </Nav>
    );
}
export default Aside;