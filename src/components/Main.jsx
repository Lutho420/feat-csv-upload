import React from 'react';
import upload from './img/Upload.png';
import cloudUpload from './img/CloudUploadOutline.svg';
import './Main.css';

export default function Main() {
    return (
        <main className="main-content">
            <section className="greetings">
                <h1>Hi Iyanu</h1>
                <p>Welcome back</p>
            </section>
            <section className="upload-section-container">
                <h1>Upload Document</h1>
                <p>Attach your csv documents for analysis</p>

                <form class="box" method="post" action="" enctype="multipart/form-data">
                    <div className="box_input">
                        <div className="box-input-inner">
                            <input class="box_file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
                            <label for="file">
                                <img className="cloudUpload" src={cloudUpload} alt="" />
                                <span class="box_dragndrop">
                                    Drag and Drop your files here
                                </span>
                                <br/>
                                <span className="file-type-allowed">
                                    <i>
                                        csv of pdf
                                    </i>
                                </span>
                                <br/>
                                <span className="browse-files">
                                    Browse files
                                </span>.
                            </label>
                        </div>
                        <button type="submit" name="upload" id="upload-btn">
                            <img id="upload-logo" src={upload} alt="upload" />
                            <span className="upload-btn-text">
                                Upload
                            </span>
                        </button>
                    </div>
                    <div class="box_uploading">Uploading…</div>
                        <div class="box_success">Done!</div>
                        <div class="box_error">Error! <span></span>.
                    </div>
                </form>
            </section>
        </main>
    );
}