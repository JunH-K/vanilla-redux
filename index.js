function counter(state, action) {
  if( state === undefined ) {
    return 0;
  }
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

var store = Redux.createStore( counter );
var { dispatch } = store;

function render() {
  var valueEl = document.getElementById( "value" );
  valueEl.innerText = store.getState().toString();
}

function render2() {
  var valueEl = document.getElementById( "value2" );
  valueEl.innerText =  store.getState();
}

store.subscribe( render );
store.subscribe( render2 );

document.querySelector( '#increment' ).addEventListener( 'click', function () {
  dispatch( { type: "INCREMENT" } );
} );


