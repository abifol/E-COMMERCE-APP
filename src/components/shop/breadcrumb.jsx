import React from 'react'
import "../css/footer.css"
const breadcrumb = () => {
  return (
    <div>
      <h1 class="text-center my-5">Shop</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#" class="text-center my-5">
              Shop
            </a>
          </li>
          <li class="breadcrumb-item active text-center my-5"  aria-current="page" >
            Library
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default breadcrumb