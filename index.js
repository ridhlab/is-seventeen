const { ALSO_SEVENTEEN, SEVENTEEN } = require("./constants");

const is = (params) => {
    if (typeof params === "string") {
        params = params.toLowerCase();
    }
    return {
        seventeen() {
            switch (typeof params) {
                case "number":
                    return params === SEVENTEEN;
                case "string":
                    return ALSO_SEVENTEEN.includes(params);
                default:
                    throw new Error("params is not number or string");
            }
        },
    };
};

module.exports = is;
