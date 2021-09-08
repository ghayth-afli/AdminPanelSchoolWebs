<template>

    <div class="page-wrapper">
            <div class="chat-main-row">
                <div class="chat-main-wrapper">
                    <div class="col-xs-12 message-view">
                        <div class="chat-window">
                            <div class="fixed-header">
                                <div class="row">
                                    <div class="col-xs-6">
                                        <h4 class="page-title m-b-0 m-t-5">Les Moyennes</h4>
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
                            <div class="contact-cat col-xs-12 col-sm-4 col-lg-3">
                                 <router-link to="/moyennes/ajout" class="btn btn-primary btn-block"><i class="fa fa-plus"></i> Ajouter un Liste des moyennes</router-link>
                                
                            </div>
                            <div class="chat-contents">
                                
                                <div class="chat-content-wrap">
                                    
                                    <div class="chat-wrap-inner">
                                        
                                        <div class="contact-box clearfix">
                                            
                                            
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="table-responsive">
                                                        <table class="table table-striped custom-table m-b-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Classe</th>
                                                                    <th>Moyenne</th>
                                                                    <th>Année scolaire</th>
                                                                    <th>trimestre</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1er A</td>
                                                                    <td><a href="moyennes.pdf">Les Moyennes.pdf</a></td>
                                                                
                                                                    <td>2020/2021</td>
                                                                    <td>1</td>
                                                                    <td class="text-right">
                                                                        <div class="dropdown">
                                                                            <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                                            <ul class="dropdown-menu pull-right">
                                                                                
                                                                                <li><a href="#"><i class="fa fa-file-pdf-o m-r-5"></i> Download</a></li>
                                                                                <li><a href="#"><i class="fa fa-trash-o m-r-5"></i> Delete</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                               
                                                                
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="notification-box">
                                            <div class="msg-sidebar notifications msg-noti">
                                                <div class="topnav-dropdown-header">
                                                    <span>Messages</span>
                                                </div>
                                                <div class="drop-scroll msg-list-scroll">
                                                    <ul class="list-box">
                                                       
                                                       
                                                        
                                                        
                                                       
                                                      
                                                        
                                                      
                                                      
                                                        
                                                        
                                                        
                                                    </ul>
                                                </div>
                                                <div class="topnav-dropdown-footer">
                                                    <a href="chat.html">See all messages</a>
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
  name: "Moyennes",

};
</script>