import React from 'react'



export default function Skills() {
    function requirefunc(name){
        return process.env.PUBLIC_URL+'/icons/'+name+'.png'
    }
    return (
        <div className="tw-pt-12 skills">
            <div style={{marginTop:"4rem"}} className="container text-center">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h3 className="tw-text-3xl tw-mt-10 ms:tw-hidden">Frontend</h3>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-12 col-xs-12 col-sm-4"><img className="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('html')} /></div>
                                <div className="col-12 col-xs-12 col-sm-4"><img className="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('css')} /></div>
                                <div className="col-12 col-xs-12 col-sm-4"><img className="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('js')} /></div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-xs-12 col-sm-4"><img className="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('reactjs')} /></div>
                                <div className="col-12 col-xs-12 col-sm-4"><img className="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('jquery')} /></div>
                                <div className="col-12 col-xs-12 col-sm-4"><img className="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('bootstrap')} /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <h3 className="tw-text-3xl tw-mt-10 ms:tw-hidden">Backend</h3>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-12 col-xs-12 col-sm-4"><img className="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('c++')} /></div>
                                <div className="col-12 col-xs-12 col-sm-4"><img className="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('python')} /></div>
                                <div className="col-12 col-xs-12 col-sm-4"><img className="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('java')} /></div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-xs-12 col-sm-4"><img className="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('mongo')} /></div>
                                <div className="col-12 col-xs-12 col-sm-4"><img className="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('nodejs')} /></div>
                                <div className="col-12 col-xs-12 col-sm-4"><img className="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('sql')} /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3 className="tw-text-3xl tw-mt-10 ms:tw-hidden">Miscellaneous</h3>
                        <div className="row">
                                <div className="col-12 col-xs-12 col-sm-3"><img className="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('tensorflow')} /></div>
                                <div className  ="col-12 col-xs-12 col-sm-3"><img className="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('keras')} /></div>
                                <div className="col-12 col-xs-12 col-sm-3"><img className="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('git')} /></div>
                                <div className="col-12 col-xs-12 col-sm-3"><img className="tw-w-[70%] tw-m-auto tw-mt-[25%]" src={requirefunc('firebase')} /></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
