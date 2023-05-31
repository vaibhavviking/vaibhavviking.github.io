import React from 'react'
import Skillutil from '../components/Skillutil'
import img from '../assets/pic.jpg'



export default function Skills() {
    function requirefunc(name){
        return process.env.PUBLIC_URL+'/icons/'+name+'.png'
    }
    return (
        <div class="content skills">
            <div style={{marginTop:"4rem"}} class="container text-center">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <h3 class="ms:tw-hidden">Frontend</h3>
                        <div class="container text-center">
                            <div class="row">
                                <div class="col-12 col-xs-12 col-sm-4"><img src={requirefunc('html')} /></div>
                                <div class="col-12 col-xs-12 col-sm-4"><img src={requirefunc('css')} /></div>
                                <div class="col-12 col-xs-12 col-sm-4"><img src={requirefunc('js')} /></div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-xs-12 col-sm-4"><img src={requirefunc('reactjs')} /></div>
                                <div class="col-12 col-xs-12 col-sm-4"><img src={requirefunc('jquery')} /></div>
                                <div class="col-12 col-xs-12 col-sm-4"><img src={requirefunc('bootstrap')} /></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <h3 class="ms:tw-hidden">Backend</h3>
                        <div class="container text-center">
                            <div class="row">
                                <div class="col-12 col-xs-12 col-sm-4"><img src={requirefunc('c++')} /></div>
                                <div class="col-12 col-xs-12 col-sm-4"><img src={requirefunc('python')} /></div>
                                <div class="col-12 col-xs-12 col-sm-4"><img src={requirefunc('java')} /></div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-xs-12 col-sm-4"><img src={requirefunc('mongo')} /></div>
                                <div class="col-12 col-xs-12 col-sm-4"><img src={requirefunc('nodejs')} /></div>
                                <div class="col-12 col-xs-12 col-sm-4"><img src={requirefunc('sql')} /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h3 class="ms:tw-hidden">Miscellaneous</h3>
                        <div class="row">
                                <div class="col-12 col-xs-12 col-sm-3"><img src={requirefunc('tensorflow')} /></div>
                                <div class  ="col-12 col-xs-12 col-sm-3"><img src={requirefunc('keras')} /></div>
                                <div class="col-12 col-xs-12 col-sm-3"><img src={requirefunc('git')} /></div>
                                <div class="col-12 col-xs-12 col-sm-3"><img src={requirefunc('firebase')} /></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
