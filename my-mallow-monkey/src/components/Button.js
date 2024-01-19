import classnames from "classnames";

/*
Acknowledgement:
This file was modified from Stephen Grider's 'Modern React with Redux' Udemy course
*/

// A custom button component for consistent styling across the app
function Button({ children, primary, secondary, rounded, ...rest }) {
  const classes = classnames(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-orange-400 bg-orange-500 text-white": primary,
      "border-stone-500 bg-stone-500 text-white": secondary,
      "rounded-full": rounded,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

// Checks prop types at runtime, ensuring mutually exclusive types
Button.propTypes = {
  checkVariationValue: ({ primary, secondary }) => {
    const count = Number(!!primary) + Number(!!secondary);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
