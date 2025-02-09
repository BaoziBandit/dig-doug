<div class="spinner">
  <div class="circle one"></div>
  <div class="circle two"></div>
  <div class="circle three"></div>
</div>

<style>
  .spinner {
    position: relative;
    width: 150px;
    height: 150px;
  }

  .spinner .circle {
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: #468;
    animation: rotate linear infinite;
    position: absolute;
  }

  .spinner .circle.one {
    width: 50px;
    height: 50px;
    left: 50px;
    top: 50px;
    animation-duration: 0.8s;
  }

  .spinner .circle.two {
    width: 75px;
    height: 75px;
    left: 38px;
    top: 38px;
    animation-duration: 0.9s;
  }

  .spinner .circle.three {
    width: 100px;
    height: 100px;
    left: 25px;
    top: 25px;
    animation-duration: 1s;
  }

  @keyframes rotate {
    form {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>
