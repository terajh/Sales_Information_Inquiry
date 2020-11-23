import React from 'react';
import { Nav } from "react-bootstrap";
import './style.css';
// eslint-disable-next-line

const Aside = () => {
    return (
        <div className="span4">
            <div id="toolbar" className="well">
                <form className="form-inline">
                    <div className="control-group">
                        <legend>Face Detection</legend>
                        <div className="controls">
                            <button className="btn" type="button">Pixelize</button>
                            <button className="btn" type="button" id="btnBlurFaces" rel="popover" >Blur</button>
                            <button className="btn" type="button">GF</button>
                        </div>
                    </div>

                    <div className="control-group">
                        <legend>Selection Effect</legend>
                        <div className="controls">
                            <label className="radio inline">
                                <input type="radio" name="optionsRadios1" id="inlineCheckbox11" value="option1"  /> Auto
        </label>
                            <label className="radio inline">
                                <input type="radio" name="optionsRadios1" id="inlineCheckbox12" value="option2" /> Manual
        </label>
                        </div>
                        <br />
                        <div id="manualSelectionControlGroup">
                            <label className="labels" style={{"justifyContent":"end"}}>Manual Effect</label>
                            <div className="controls">
                                <label className="radio inline">
                                    <input type="radio" name="optionsRadios" id="inlineCheckbox1" value="option1"/> Blur
                                </label>
                                <label className="radio inline">
                                    <input type="radio" name="optionsRadios" id="inlineCheckbox2" value="option2" /> Pixelize
                                </label>
                                <label className="radio inline">
                                    <input type="radio" name="optionsRadios" id="inlineCheckbox3" value="option3"/> Solid
                                </label>
                            </div>
                            <br />
                            <label className="labels" style={{"justifyContent":"end"}}>Size</label>
                            <div className="controls">
                                <div className="slider slider-horizontal" >
                                    <div className="slider-track">
                                        <div className="slider-selection" >
                                        </div>
                                        <div className="slider-handle round" >
                                        </div>
                                        <div className="slider-handle round hide" >
                                        </div>
                                    </div>
                                    <div className="tooltip top hide" >
                                        <div className="tooltip-arrow"></div>
                                        <div className="tooltip-inner">Size: 25</div>
                                    </div>
                                    <input type="text" className="span2" id="sl1" data-slider-min="3" data-slider-max="25" data-slider-step="1" data-slider-value="7" data-slider-tooltip="hide" />
                                </div>
                            </div>
                            <br />
                            <div className="controls">
                                <label className="labels" style={{"justifyContent":"end"}}>Preview</label>
                                <br />
                                <canvas id="previewCanvas" width="150" height="178"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="control-group">
                        <legend id="cropLabel">Crop</legend>
                        <div className="controls">
                            <button className="btn" type="button" id="cropButton">Start Crop</button>
                            <button className="btn" type="button" >Apply</button>
                        </div>
                    </div>
                    <div className="control-group">
                        <legend>Save</legend>
                        <div className="controls">
                            <button className="btn btn-success" type="button" >Save Image</button>
                            <button className="btn btn-warning" type="button" >Revert</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Aside;