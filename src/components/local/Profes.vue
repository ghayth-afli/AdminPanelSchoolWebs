<template>
  <div class="page-wrapper">
      
     <div class="chat-main-row">
                <div class="chat-main-wrapper">
                    <div class="col-xs-12 message-view">
                        <div class="chat-window">
                            <div class="fixed-header">
                                <div class="row">
                                    <div class="col-xs-6">
                                        <h4 class="page-title m-b-0 m-t-5">Les profes</h4>
                                    </div>
                                    <div class="col-xs-6">
                                        <div class="navbar">
                                            
                                            <div class="search-box m-t-0">
                                                <div class="input-group input-group-sm">
                                                    <input type="text" class="form-control" placeholder="rechercher" required="">
                                                    <span class="input-group-btn">
															<button class="btn" type="button"><i class="fa fa-search"></i></button>
														</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="chat-contents">
                                <div class="chat-content-wrap">
                                    <div class="chat-wrap-inner">
                                        <div class="contact-box clearfix">
                                            <div class="contact-cat col-xs-12 col-sm-4 col-lg-3">
                                               <router-link to="/profes/ajout" class="btn btn-primary btn-block"><i class="fa fa-plus"></i> Ajouter un profes</router-link>
                                                
                                            </div>
                                            <div class="contacts-list col-xs-12 col-sm-8 col-lg-9">
                                                <ul class="contact-list">
                                                   
                                                    
                                                    
                                                   
                                                  
                                                    
                                                   
                                                    
                                                    <li>
                                                        <div class="contact-cont">
                                                            <div class="pull-left user-img m-r-10">
                                                                <a href="profile.html" title="Richard Miles"><img src="assets/img/user.jpg" alt="" class="w-40 img-circle"><span class="status online"></span></a>
                                                            </div>
                                                            <div class="contact-info">
                                                                <span class="contact-name text-ellipsis">Richard Miles</span>
                                                                <span class="contact-date">Arabe</span>
                                                            </div>
                                                            <ul class="contact-action">
                                                                <li class="dropdown">
                                                                    <a href="" class="dropdown-toggle action-icon" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="javascript:void(0)">Edit</a></li>
                                                                        <li><a href="javascript:void(0)">Delete</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="contact-alphapets">
                                                <div class="alphapets-inner">
                                                    <a href="#">A</a>
                                                    <a href="#">B</a>
                                                    <a href="#">C</a>
                                                    <a href="#">D</a>
                                                    <a href="#">E</a>
                                                    <a href="#">F</a>
                                                    <a href="#">G</a>
                                                    <a href="#">H</a>
                                                    <a href="#">I</a>
                                                    <a href="#">J</a>
                                                    <a href="#">K</a>
                                                    <a href="#">L</a>
                                                    <a href="#">M</a>
                                                    <a href="#">N</a>
                                                    <a href="#">O</a>
                                                    <a href="#">P</a>
                                                    <a href="#">Q</a>
                                                    <a href="#">R</a>
                                                    <a href="#">S</a>
                                                    <a href="#">T</a>
                                                    <a href="#">U</a>
                                                    <a href="#">V</a>
                                                    <a href="#">W</a>
                                                    <a href="#">X</a>
                                                    <a href="#">Y</a>
                                                    <a href="#">Z</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
  </div>
</template>

<script>
export default {
  name: "Profes",

};
</script>