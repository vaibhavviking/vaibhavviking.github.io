import React from 'react'



export default function Skills() {
    function requirefunc(name){
        return process.env.PUBLIC_URL+'/icons/'+name+'.png'
    }
    return (
        <div class="tw-pt-12 skills">
            <div style={{marginTop:"4rem"}} class="container text-center">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <h3 class="tw-text-3xl tw-mt-10 ms:tw-hidden">Frontend</h3>
                        <div class="container text-center">
                            <div class="row">
                                <div class="col-12 col-xs-12 col-sm-4"><img class="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('html')} /></div>
                                <div class="col-12 col-xs-12 col-sm-4"><img class="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('css')} /></div>
                                <div class="col-12 col-xs-12 col-sm-4"><img class="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('js')} /></div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-xs-12 col-sm-4"><img class="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('reactjs')} /></div>
                                <div class="col-12 col-xs-12 col-sm-4"><img class="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('jquery')} /></div>
                                <div class="col-12 col-xs-12 col-sm-4"><img class="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('bootstrap')} /></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <h3 class="tw-text-3xl tw-mt-10 ms:tw-hidden">Backend</h3>
                        <div class="container text-center">
                            <div class="row">
                                <div class="col-12 col-xs-12 col-sm-4"><img class="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('c++')} /></div>
                                <div class="col-12 col-xs-12 col-sm-4"><img class="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('python')} /></div>
                                <div class="col-12 col-xs-12 col-sm-4"><img class="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('java')} /></div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-xs-12 col-sm-4"><img class="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('mongo')} /></div>
                                <div class="col-12 col-xs-12 col-sm-4"><img class="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('nodejs')} /></div>
                                <div class="col-12 col-xs-12 col-sm-4"><img class="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('sql')} /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h3 class="tw-text-3xl tw-mt-10 ms:tw-hidden">Miscellaneous</h3>
                        <div class="row">
                                <div class="col-12 col-xs-12 col-sm-3"><img class="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('tensorflow')} /></div>
                                <div class  ="col-12 col-xs-12 col-sm-3"><img class="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('keras')} /></div>
                                <div class="col-12 col-xs-12 col-sm-3"><img class="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('git')} /></div>
                                <div class="col-12 col-xs-12 col-sm-3"><img class="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('firebase')} /></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
