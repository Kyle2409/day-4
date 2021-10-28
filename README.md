# Kyles-Portfolio
# Self-Portfolio
# day-4
  .item-social a:before {
        transform: scale(1);
        -ms-transform: scale(1);
        -webkit-transform: scale(1);
        content: " ";
        width: 45px;
        height: 45px;
        border-radius: 100%;
        display: block;
        background: linear-gradient(45deg, #ff003c, #c648c8);
        transition: all 265ms ease-out;
      }
      
    .item-social a:hover:before {
        transform: scale(0);
        transition: all 265ms ease-in;
      }
      
    .item-social a:hover i {
        transform: scale(2.2);
        -ms-transform: scale(2.2);
        -webkit-transform: scale(2.2);
        color: #ff003c;
        background: -webkit-linear-gradient(45deg, #ff003c, #c648c8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 265ms ease-in;
      }