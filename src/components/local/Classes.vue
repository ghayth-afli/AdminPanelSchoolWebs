<template>
  <div class="page-wrapper">
    <div class="chat-main-row">
      <div class="chat-main-wrapper">
        <div class="col-xs-12 message-view">
          <div class="chat-window">
            <div class="fixed-header">
              <div class="row">
                <div class="col-xs-6">
                  <h4 class="page-title m-b-0 m-t-5">Les classes</h4>
                </div>
                <div class="col-xs-6">
                  <div class="navbar">
                    <div class="search-box m-t-0">
                      <div class="input-group input-group-sm">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="rechercher"
                          required=""
                        />
                        <span class="input-group-btn">
                          <button class="btn" type="button">
                            <i class="fa fa-search"></i>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-cat col-xs-12 col-sm-4 col-lg-3">
              <router-link to="/classes/ajout" class="btn btn-primary btn-block"><i class="fa fa-plus"></i> Ajouter un classe</router-link>
            </div>
            <div class="chat-contents">
              <div class="chat-content-wrap">
                <div class="chat-wrap-inner">
                  <div class="contact-box clearfix">
                    <div class="row staff-grid-row">
                      <div class="col-md-4 col-sm-4 col-xs-6 col-lg-3">
                        <div class="profile-widget">
                          <div class="profile-img">
                            <router-link to="/classe/profile" class="avatar">A</router-link>
                          </div>
                          <div class="dropdown profile-action">
                            <a
                              href="#"
                              class="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                              ><i class="fa fa-ellipsis-v"></i
                            ></a>
                            <ul class="dropdown-menu pull-right">
                              <li>
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#edit_client"
                                  ><i class="fa fa-pencil m-r-5"></i> Edit</a
                                >
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_client"
                                  ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                                >
                              </li>
                            </ul>
                          </div>
                          <h4 class="user-name m-t-10 m-b-0 text-ellipsis">
                            <router-link to="/classe/profile">1er</router-link>
                          </h4>
                          <div class="small text-muted">A</div>
                           <router-link to="/classe/profile"
                            class="btn btn-default btn-sm m-t-10"
                            >Profile de classe</router-link>
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
                        <ul class="list-box"></ul>
                      </div>
                      <div class="topnav-dropdown-footer">
                        <a href="chat.html">See all messages</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="edit_client"
                  class="modal custom-modal fade"
                  role="dialog"
                >
                  <div class="modal-dialog">
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                    <div class="modal-content modal-lg">
                      <div class="modal-header">
                        <h4 class="modal-title">Edit Classe</h4>
                      </div>
                      <div class="modal-body">
                        <div class="m-b-30">
                          <form>
                            <div class="form-group">
                              <label>Niveau:</label>
                              <select class="form-control">
                                <option>1er</option>
                                <option>2eme</option>
                                <option>3eme</option>
                                <option>4eme</option>
                                <option>5eme</option>
                                <option>6eme</option>
                              </select>
                            </div>

                            <div class="form-group">
                              <label>Nom de classe:</label>
                              <select class="form-control">
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                                <option>F</option>
                                <option>G</option>
                                <option>H</option>
                              </select>
                            </div>

                            <div class="form-group">
                              <label>selectionner les matiers:</label>
                              <div class="col-lg-10">
                                <div class="checkbox">
                                  <label>
                                    <input type="checkbox" name="checkbox" />
                                    Arabe
                                  </label>
                                </div>
                                <div class="checkbox">
                                  <label>
                                    <input type="checkbox" name="checkbox" />
                                    Histoire
                                  </label>
                                </div>
                                <div class="checkbox">
                                  <label>
                                    <input type="checkbox" name="checkbox" />
                                    GEo
                                  </label>
                                </div>
                                <div class="checkbox">
                                  <label>
                                    <input type="checkbox" name="checkbox" /> fr
                                  </label>
                                </div>
                                <div class="checkbox">
                                  <label>
                                    <input type="checkbox" name="checkbox" />
                                    GEo
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div class="m-t-20 text-center">
                              <button class="btn btn-primary btn-lg">
                                Edit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="delete_client"
                  class="modal custom-modal fade"
                  role="dialog"
                >
                  <div class="modal-dialog">
                    <div class="modal-content modal-md">
                      <div class="modal-header">
                        <h4 class="modal-title">Delete Client</h4>
                      </div>
                      <div class="modal-body card-box">
                        <p>Are you sure want to delete this?</p>
                        <div class="m-t-20">
                          <a
                            href="#"
                            class="btn btn-default"
                            data-dismiss="modal"
                            >Close</a
                          >
                          <button type="submit" class="btn btn-danger">
                            Delete
                          </button>
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
  </div>
</template>

<script>
export default {
  name: "Classes",
};
</script>
