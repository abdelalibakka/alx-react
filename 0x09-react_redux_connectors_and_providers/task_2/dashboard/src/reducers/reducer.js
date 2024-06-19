import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/uiActionCreators";
import PropTypes from "prop-types";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

function Header({user, logout}) {

  return (
    <>
      <div className={css(styles["App-header"])}>
        <img src={logo} className={css(styles.img)} alt="logo" />
        <h1>School dashboard</h1>
      </div>

      {user && (
        <section className={css(styles.greeting)} id="logoutSection">
          Welcome<strong> {user.email} </strong>
          <em>
            <a href="#" onClick={logout}>
              (logout)
            </a>
          </em>
        </section>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
  },

  img: {
    width: "200px",
    height: "200px",
  },

  greeting: {
    marginTop: "1rem",
  },
});

Header.defaultProps = {
  user: null,
  logout: () => {},
}

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  }
}

const mapDispatchToProps = {
  logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
