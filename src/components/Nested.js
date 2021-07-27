import React, { Component } from 'react'

export default class Nested extends Component {
    render() {
        return (
            <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
          
            <div class="btn-group" role="group">
              <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </button>
              <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                <li><a class="dropdown-item" href="#">Dropdown link</a></li>
              </ul>
            </div>
          </div>
        )
    }
  }
