import React, { Component } from 'react'


export default class Header extends Component {
    render() {
        return (
        
          <div class="container-fluid bg-light py-3 my-3">
              <div class="row">
              <div class="col-4">
                    <div>
                    <nav class="navbar navbar-light bg-light">
                      <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                          <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"></img>
                            RUMA
                        </a>
                      </div>
                      
                    </nav>
                    </div>


            <div>
                  <div class="list-group">
                  <a href="#" class="list-group-item list-group-item-action active">
                      <i class="fa fa-home"></i> Home
                  </a>
                  <a href="#" class="list-group-item list-group-item-action">
                      <i class="fa fa-camera"></i> Pictures <span class="badge badge-pill badge-primary pull-right">145</span>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action">
                      <i class="fa fa-music"></i> Music <span class="badge badge-pill badge-primary pull-right">50</span>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action">
                      <i class="fa fa-film"></i> Videos <span class="badge badge-pill badge-primary pull-right">8</span>
                  </a>
              </div>
              

            </div>

              </div>
            



            <div class="col-8">
                    <div>
                    <ul class="list-group list-group-flush">
                          <li class="list-group-item">
                          <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <div class="container-fluid">
                                  <a class="navbar-brand" href="#">Navbar</a>
                                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                  </button>
                                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                      <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" href="#">Link</a>
                                      </li>
                                   

                                   
                                      
                                    </ul>
                                    <form class="d-flex">
                                      <ul>
                                    <i class="fas fa-comment-alt"></i> 
                                    </ul>




                                      <button class="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                  </div>
                                </div>
                              </nav>
                          </li>
                           
                           <hr/>

                       
                           <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <div class="container-fluid">
                                  <a class="navbar-brand" href="#">Navbar</a>
                                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                  </button>
                                  <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                      <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" href="#">Features</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" href="#">Pricing</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </nav>

                        </ul>
                    </div>


                  <div>
                    {/*  Card goes here  */}
                    <div class="card text-center">
                    <div class="card-header">
                      <div>
                      <nav class="navbar navbar-light bg-light justify-content-between">
                          <a class="navbar-brand"> <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input></a>
                          <form class="form-inline">
                           
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Add Staff</button>
                          </form>
                        </nav>
                      </div>
                    </div>
                    <div class="card-body">
                         <table class="table">
                              <caption>List of users</caption>
                              <thead>
                                <tr>
                                  <th scope="col"></th>
                                  <th scope="col">First</th>
                                  <th scope="col">Last</th>
                                  <th scope="col">Handle</th>
                                  <th scope="col">Handle</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">
                                  <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."></input>
                                  </th>
                                  <td>Mark</td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                  <td><div class="btn-group">
                                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      Small button
                                    </button>
                                    <ul class="dropdown-menu">
                                      ...
                                    </ul>
                                  </div></td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                  <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."></input>
                                  </th>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>@fat</td>
                                  <td><div class="btn-group">
                                      <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Small button
                                      </button>
                                      <ul class="dropdown-menu">
                                        ...
                                      </ul>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                  <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."></input>
                                  </th>
                                  <td>Larry</td>
                                  <td>the Bird</td>
                                  <td>@twitter</td>
                                  <td><div class="btn-group">
                                      <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Small button
                                      </button>
                                      <ul class="dropdown-menu">
                                        ...
                                      </ul>
                                    </div></td>
                                </tr>
                              </tbody>
                            </table>
                      </div>

                      <div class="fixed-bottom">
                        
                      <div class="card-footer text-muted"><p class="text-end">Version 1.0</p>
</div>
                      </div>

                      

                      </div>
                      
                  </div>  

                  </div>


                  
                </div>             
           </div>
        )
    }
  }
   
