import { connect } from "react-redux";

import Home from "../components/Home";

import { AddToCart } from "../Services/Actions/actions";

const mapStateToProps = state => ({
  cardData: state
})

const mapDispatchToProps = dispatch =>({
  addToCardHandler: data => dispatch(AddToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)