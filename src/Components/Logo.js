import React, {Component} from "react"

export default class Logo extends Component {
    constructor() {
        super()
            this.state = {
                index: 0,
                img: "https://lh3.googleusercontent.com/prp11CIaULrbU-e57CobD7mxVB7sGJ9fYk9PW8UV3WibO7VDk3xvHBhpeXmluqgS675p_dNH57ICFDy_8Qr_ibdzxglNZ6K-ddlGkI5pwcktLGC18_-lzGwKG8P-N2PqinRx2m1qy7f4nuqcgf8hsDKhZkLuQ0iw3syxiu63JljjevEzo8d3kyTyNHAS22I6pYrOIWLjfTveAQqeWWubN-mB7GhW8KU4GyPf2bnhe5S2K4ybuOH73JA4vOK8vyLhgJfLh4wYPuEH9IxnrEy-iV0rRL4z4MDvW_rW2M-0AXfQOwVuTa0uXxRAJtLJ8FzRZcazrdqZQNECmVLbhcfO_Od5go-3mXB6CQlm2483WCsLrn8XC-WBF0_iZwk135Bm9O9nK7oc-wOYI2BKhZlAnaXA-Kb5U77Xs7ySsW3C8vKM9VcaMG_6Bqy85OipV-bwUS4F6hh9xTEeRrGZPXl4ul8fK7U2C9Ll3xSw-neWSGY9obpLCUtuhH0wsHo0xXgVTmAbjkmtTQ7xf9Vyj2pD7UojMzabHan7FGHWTJGNowLmM46CKwsNl6IKR-Psq_h5s5EoqHYeTc84zrH-79d984i_lwf5x-dDMHPoGfWG_G0brYYHbhppgBGIypU8dQ0z70UZyC2B4sDhGaia4ppv7-P3E7edwvQ=s300-no",
                imgArray: ["https://lh3.googleusercontent.com/prp11CIaULrbU-e57CobD7mxVB7sGJ9fYk9PW8UV3WibO7VDk3xvHBhpeXmluqgS675p_dNH57ICFDy_8Qr_ibdzxglNZ6K-ddlGkI5pwcktLGC18_-lzGwKG8P-N2PqinRx2m1qy7f4nuqcgf8hsDKhZkLuQ0iw3syxiu63JljjevEzo8d3kyTyNHAS22I6pYrOIWLjfTveAQqeWWubN-mB7GhW8KU4GyPf2bnhe5S2K4ybuOH73JA4vOK8vyLhgJfLh4wYPuEH9IxnrEy-iV0rRL4z4MDvW_rW2M-0AXfQOwVuTa0uXxRAJtLJ8FzRZcazrdqZQNECmVLbhcfO_Od5go-3mXB6CQlm2483WCsLrn8XC-WBF0_iZwk135Bm9O9nK7oc-wOYI2BKhZlAnaXA-Kb5U77Xs7ySsW3C8vKM9VcaMG_6Bqy85OipV-bwUS4F6hh9xTEeRrGZPXl4ul8fK7U2C9Ll3xSw-neWSGY9obpLCUtuhH0wsHo0xXgVTmAbjkmtTQ7xf9Vyj2pD7UojMzabHan7FGHWTJGNowLmM46CKwsNl6IKR-Psq_h5s5EoqHYeTc84zrH-79d984i_lwf5x-dDMHPoGfWG_G0brYYHbhppgBGIypU8dQ0z70UZyC2B4sDhGaia4ppv7-P3E7edwvQ=s300-no", 
                "https://lh3.googleusercontent.com/2IDgzDxZnZNSHsRbtLyhXfdTkuwPd03KQGMcXzDIy8ku51AURPtriL7C7OFuIdwRVRMYLWyBN6yoieYg_KIWc3EVuBSD8GhPKISRmUrFJqpHjXryBLvHI_rWoB4EHzR680luJoq7oxTGH5h1FQzAvYQT9PZQ_NYLPEtsxGCBwkqUS0iIbggzsmVdEQXy3fTpkVffFy7wvUeTaXiHDCgxwAx0syh2qFw34liAHLEkb2xpKQ1mdnX6_DVeytV1-PJ4JJ1oC1cTRyDnnTqRGFpHDT4GM9hDYTEvrnMoRG5povEtlrsq-IjK0JXiDnLTUEjE2tEFPmgz51FPDEnzMY2KiEFQrKbxFh4y6jbRYQry1G1oCtLbPgwR3Q1COehJHOg_E1bXpkggvP-l82DcJ9V9Sawa-Ntk7nfH29XmYhdF5jvN_lJ9eAl5g9kcbczb0NyyB0srYs75e3eau1pS3AerxSRS7eHdj3_5u9yPafTTGsQpE74Sn-guizmhWEx5iKsIWIVBDPQECx_d2-UGE0hrV9agifdna1FWD9_3_gWhBTVXJTg3LqTa4b40StB_kR9Ru0kgKMGETQbb9aDgHSetNUNylN833f7oJnjb4-SZg-wDgKDjmQyIK-AtYmW588idNF1yp3Oa_iPTMj3XVXakTS0oe7JLgI0=s300-no", 
                "https://lh3.googleusercontent.com/3xDtM6OqRUpYTYrFGAxyPuDuOBZba16had1gX6sZBjAEWQSGknG2tb58Kfzw4McAJpJnrnm56rsjn8donVTHgpH4xUxZXmRgqpQqIqDQlJZVYQMNVbxsB9WA02OvB8uZ4dqz_gVggFH8nVVl28YhusEd_q2m1_fyRQsph3CXQbhPWK-gi95ECVcHZAen-jn5iY6t2scUqIOTEExcHQguLTVSP-UtqsUojir4Iu6DpLb5iK4FdbRU7o762WMGZ7iJ1lpxDLj6ABo8aygyACUebhC1d0708zRS--7l5xN7Pq3juPX_d4KezcO-tCV9YGfL4JTlSAwReGK0TKeAJkdvkEx9lbTpwmt73rwkUf_awiTZ34XCyZdzAINLvqrPNkR1nA8TUjA9P2ByPeO2zA9I92K5_19vAECBEbXNtv3QHfpt7S_4k9j0rIMaUGMm1pr_KU25yj5RFWeUIIgSASwnxDf2ttuEdzoAlSEW6qMFDIGOOpR95zn2H1JbOtYqwlbgBXuot0Dun0EjJm0aojOB1ncneJffdJ2LFnyZ2k4RLHx5uXSwcszeVWgfTYsy8QCghGttoptuLqy9v1_7jY7C6V-CQMJO2WwZflYp74RBNPLZlEg7wA-IkwO0CALHC15tFTvO7FWSqhHMK1kllmEQ77Q3JCGxQ8M=s300-no", 
                "https://lh3.googleusercontent.com/wb7C5a20fVZa2ezB-SWOSd68B97q-9oeJHewD__X6CAEAtPIC1G8_MwoMR9_H1YdJHhq5grIgJdNzT6HFeMXtas6_GI7OQcMoN0pPlBFd8tXO9l16gOGdSzfV4KVVlWSCbXo8jObvfihq8_YlMvKlcp7qYnVaLOB0xT4bbqwZZEzVDv8hHNjN96OGnc1aOW8W6VoX4x_P5ENl_JtRG3NdnIwqtYzCov0MBTym1daM8tGWmO2SD5Dkg7ONIRkp8mil6roTxDVVII7chAQiDzBx4hynj2A-JSIjbCOymXT1NNHgQ4BMu2Y71na9x4H3K8e0uyaK_mHeIFvJkXCp3eLy9R3h2iK21uGa72l6fOCLf0KqSN-3VGWnIwxIgb2MV88bxH-uGdWmhavTNyx4LRJbO8AI3iwTHAvaZ6NKm37atisKy_YEgVQfXDbefcHLrT0guBZ0MCv26CLwpOAR6Qq5I9ivmMrB7p_O5XmL1VbmvTPXRBv0W98H0XzsHXGvOLSBLOEN7jkxim5PDV42f0U8z1yFY4SpehLkAOCGMnQInJucm9toWN8qmPRMW_RtrDBfgnqpJFEBcANy6o6EGTqsJJX70jx3Igc7rqyNlMfupXHcVBq2cck6ZwHHtNZ7wb1VO1TzBsBPSMlEl7npe5ArbGfAsaPQBk=s300-no", 
                "https://lh3.googleusercontent.com/Rq1eCW3VebD0xrZ0fXKOCwk5s_z00Enh2Olvp5xjUDzVqtA_82R-zhYPgFJ90aIrhGKg8q9yDmE6sdmtckkqaKfFDA9AngIt1RgBDLaS-xddnKf-_rMA8AamcN_ov5f534BiXXihjlbPh_nYvYpfsoMWcWcxqoSrHGZx8BBEroTt819mHYC_8Tt_Sx3FahB3UomrIKD5Xz4ZmPZdD5N4-irsiqFvfNI10f5XKzgGkOak11KVIe3w4XlNOf9u6rsRSEElbPV32LtQfjFhgZ3wz8CSwC-FL-OIqPMCknH7144iWs9F06xPzd76k3wJU0MAD4YXDzzLxLtt2qYk3TyVqLB8hm6zXr7hZimB7GnS6YP6A0DaYykmAt9JzocNJpFTB9I7IBspj_wYYIflaKDFtTifVr-bxS9hY4tg1K3su-KTnYf054HLaB6Y4pI4wLhieN222Studp3UeHCe35XqH5JH047m1lKQepAriuxo9DH3uMoWQIXNraCt5G0OkXoSxFpkYPukcc_enb-bXgiQ_RP-jp7OqwR1lyhT9R266ZFu3eAO5SdE1bRNgn0Yp2VlqFJhHbvGiV-p7WH-yyCxbU0U0D2bNuu62bb8UWrPqwwxXecP5m6Ra0v7wd6iKnbtnx8rKUL_D7Hd3uP5iEhR8B7LAlfCZoU=s300-no" ]
            }
        

    }
    runningMan() {
        const newIndex = this.state.index 
        if (this.state.index > 5) {
            this.setState({
                img: this.state.imgArray[newIndex],
                index: 0
            })
        }
        else{ 
            this.setState({
                index: newIndex + 1,
                img: this.state.imgArray[newIndex]
            })

        }


    }
    render() {
        return(
        <div>
            <img className="logo" src={this.state.img} alt="hedgehog logo"/>
        </div>
    )
}
}


/* <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>test</title>
        <link rel="stylesheet" type="text/css" href="/css/styles.css">
    </head>

    <body>
        <img id="image" src="foto1.jpg">

        <script type = "text/javascript">
            var image = document.getElementById("image");
            var currentPos = 0;
            var images = ["foto1.jpg", "foto2.jpg", "foto3.jpg"]

            function volgendefoto() {
                if (++currentPos >= images.length)
                    currentPos = 0;

                image.src = images[currentPos];
            }

            setInterval(volgendefoto, 3000);
        </script>
    </body>
</html> */