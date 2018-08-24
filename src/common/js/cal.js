export const cal = {
    jsIn(total, month, rate) {
        var pay =
            total *
            rate *
            Math.pow(1 + rate, month) /
            (Math.pow(1 + rate, month) - 1);
        return pay;
    },
    jsCa(total, month, rate) {
        var money = total / month;
        var down = money * rate;
        return down;
    }
}