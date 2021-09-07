<template>
  <div class="page-wrapper">
    <div class="content container-fluid">
                <div class="row">
                    <div class="col-xs-4">
                        <h4 class="page-title">Les profes</h4>
                    </div>
                    
                </div>
                
                <div class="row staff-grid-row">
                    <div class="col-md-4 col-sm-4 col-xs-6 col-lg-3">
                        <div class="profile-widget">
                            <div class="profile-img">
                                <a href="profile.html"><img class="avatar" src="assets/img/user.jpg" alt=""></a>
                            </div>
                           
                            <h4 class="user-name m-t-10 m-b-0 text-ellipsis"><a href="profile.html">John Doe</a></h4>
                            <div class="small text-muted">Arabe</div>
                        </div>
                    </div>
                 
                </div>

                <div class="row">
                    <div class="col-xs-4">
                        <h4 class="page-title">Les eleves</h4>
                    </div>
                    
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-striped custom-table datatable">
                                <thead>
                                    <tr>
                                        <th style="width:30%;">Name</th>
                                        <th>Numero d'inscription</th>
                                        <th>Date de nessance</th>
                                        <th>Nombre d'abscence</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="profile.html" class="avatar">D</a>
                                            <h2><a href="profile.html">Daniel Porter</a></h2>
                                        </td>
                                        <td>1159634</td>
                                        <td>1 Jan 2011</td>
                                        <td>2</td>
                                        
                                        <td class="text-right">
                                            
                                        </td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
  </div>
</template>

<script>
export default {
  name: "ClasseProfile",

};
</script>