class CommonUtil {

    public shortenAddress(address: string) {
        return `${address.substring(0, 6)}...${address.substring(38)}`
    }

    public numberWithCommas(x: string, fixed = 3) {
        const parts = String(+(+x).toFixed(fixed)).split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
}

export default new CommonUtil();
