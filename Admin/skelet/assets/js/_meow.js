(function ($, doc) {
    jQuery(document).ready(function ($) {
        /**
         * 隐藏内容
         * @type {Element}
         */
        var support_comment = doc.querySelector(".support_comment");
        var toc_tips = doc.querySelector(".toc_tips");
        var other_one = doc.querySelector(".other_one");
        var other_two = doc.querySelector(".other_two");
        if (support_comment !== null && support_comment !== undefined) {
            if (doc.querySelectorAll(".nav-tab")[0].getAttribute("class") === "nav-tab nav-tab-active") {
                support_comment.remove();
            }
        }
        if (toc_tips !== null && toc_tips !== undefined) {
            if (doc.querySelectorAll(".nav-tab")[5].getAttribute("class") === "nav-tab nav-tab-active") {
                toc_tips.remove();
            }
        }
        if (other_one !== null && other_one !== undefined) {
            if (doc.querySelectorAll(".nav-tab")[9].getAttribute("class") === "nav-tab nav-tab-active") {
                other_one.remove();
            }
        }
        if (other_two !== null && other_two !== undefined) {
            if (doc.querySelectorAll(".nav-tab")[9].getAttribute("class") === "nav-tab nav-tab-active") {
                other_two.remove();
            }
        }

        /**
         * PrismJS选项卡
         * 根据选项显示或者隐藏
         */
        if (doc.querySelectorAll(".nav-tab")[3] !== null && doc.querySelectorAll(".nav-tab")[3] !== undefined) {
            if (doc.querySelectorAll(".nav-tab")[3].getAttribute("class") === "nav-tab nav-tab-active") {
                if (doc.querySelectorAll("input")[0].getAttribute("checked") === "checked") {
                    doc.querySelectorAll(".form-table")[1].style.display = "none";
                    doc.querySelectorAll(".form-table")[2].style.display = "none";
                    doc.querySelectorAll(".form-table")[3].style.display = "none";
                    doc.querySelectorAll(".form-table")[4].style.display = "none";
                    doc.querySelectorAll(".form-table")[5].style.display = "none";
                    doc.querySelectorAll(".form-table")[6].style.display = "none";
                } else if (doc.querySelectorAll("input")[1].getAttribute("checked") === "checked" && doc.querySelectorAll("input")[2].getAttribute("checked") === "checked") {
                    doc.querySelectorAll(".form-table")[2].style.display = "block";
                    doc.querySelectorAll(".form-table")[3].style.display = "block";
                    doc.querySelectorAll(".form-table")[4].style.display = "block";
                    doc.querySelectorAll(".form-table")[5].style.display = "none";
                    doc.querySelectorAll(".form-table")[6].style.display = "none";
                } else if (doc.querySelectorAll("input")[1].getAttribute("checked") === "checked" && doc.querySelectorAll("input")[3].getAttribute("checked") === "checked") {
                    doc.querySelectorAll(".form-table")[2].style.display = "none";
                    doc.querySelectorAll(".form-table")[3].style.display = "none";
                    doc.querySelectorAll(".form-table")[4].style.display = "none";
                    doc.querySelectorAll(".form-table")[5].style.display = "block";
                    doc.querySelectorAll(".form-table")[6].style.display = "block";
                }
                doc.querySelectorAll("input")[0].addEventListener("click", function () {
                    doc.querySelectorAll(".form-table")[1].style.display = "none";
                    doc.querySelectorAll(".form-table")[2].style.display = "none";
                    doc.querySelectorAll(".form-table")[3].style.display = "none";
                    doc.querySelectorAll(".form-table")[4].style.display = "none";
                    doc.querySelectorAll(".form-table")[5].style.display = "none";
                    doc.querySelectorAll(".form-table")[6].style.display = "none";
                });
                doc.querySelectorAll("input")[1].addEventListener("click", function () {
                    doc.querySelectorAll(".form-table")[1].style.display = "block";
                    if (doc.querySelectorAll("input")[2].getAttribute("checked") === "checked") {
                        doc.querySelectorAll(".form-table")[2].style.display = "block";
                        doc.querySelectorAll(".form-table")[3].style.display = "block";
                        doc.querySelectorAll(".form-table")[4].style.display = "block";
                        doc.querySelectorAll(".form-table")[5].style.display = "none";
                        doc.querySelectorAll(".form-table")[6].style.display = "none";
                    } else if (doc.querySelectorAll("input")[3].getAttribute("checked") === "checked") {
                        doc.querySelectorAll(".form-table")[2].style.display = "none";
                        doc.querySelectorAll(".form-table")[3].style.display = "none";
                        doc.querySelectorAll(".form-table")[4].style.display = "none";
                        doc.querySelectorAll(".form-table")[5].style.display = "block";
                        doc.querySelectorAll(".form-table")[6].style.display = "block";
                    }
                });
                doc.querySelectorAll("input")[2].addEventListener("click", function () {
                    doc.querySelectorAll(".form-table")[2].style.display = "block";
                    doc.querySelectorAll(".form-table")[3].style.display = "block";
                    doc.querySelectorAll(".form-table")[4].style.display = "block";
                    doc.querySelectorAll(".form-table")[5].style.display = "none";
                    doc.querySelectorAll(".form-table")[6].style.display = "none";
                });
                doc.querySelectorAll("input")[3].addEventListener("click", function () {
                    doc.querySelectorAll(".form-table")[2].style.display = "none";
                    doc.querySelectorAll(".form-table")[3].style.display = "none";
                    doc.querySelectorAll(".form-table")[4].style.display = "none";
                    doc.querySelectorAll(".form-table")[5].style.display = "block";
                    doc.querySelectorAll(".form-table")[6].style.display = "block";
                });
            }
        }
        /**
         * Emoji选项卡
         * 根据选项显示或者隐藏
         */
        if (doc.querySelectorAll(".nav-tab")[4] !== null && doc.querySelectorAll(".nav-tab")[4] !== undefined) {
            if (doc.querySelectorAll(".nav-tab")[4].getAttribute("class") === "nav-tab nav-tab-active") {
                if (doc.querySelectorAll("input")[0].getAttribute("checked") === "checked") {
                    doc.querySelectorAll(".form-table")[1].style.display = "none";
                } else {
                    doc.querySelectorAll(".form-table")[1].style.display = "block";
                }
                doc.querySelectorAll("input")[0].addEventListener("click", function () {
                    doc.querySelectorAll(".form-table")[1].style.display = "none";
                });
                doc.querySelectorAll("input")[1].addEventListener("click", function () {
                    doc.querySelectorAll(".form-table")[1].style.display = "block";
                });
            }
        }
        /**
         * 文章目录选项卡
         * 根据选项显示或者隐藏
         */
        if (doc.querySelectorAll(".nav-tab")[5] !== null && doc.querySelectorAll(".nav-tab")[5] !== undefined) {
            if (doc.querySelectorAll(".nav-tab")[5].getAttribute("class") === "nav-tab nav-tab-active") {
                if (doc.querySelectorAll("input")[0].getAttribute("checked") === "checked") {
                    doc.querySelectorAll(".form-table")[1].style.display = "none";
                } else {
                    doc.querySelectorAll(".form-table")[1].style.display = "block";
                }
                doc.querySelectorAll("input")[0].addEventListener("click", function () {
                    doc.querySelectorAll(".form-table")[1].style.display = "none";
                });
                doc.querySelectorAll("input")[1].addEventListener("click", function () {
                    doc.querySelectorAll(".form-table")[1].style.display = "block";
                });
            }
        }
        /**
         * 科学公式选项卡
         * 根据选项显示或者隐藏
         */
        if (doc.querySelectorAll(".nav-tab")[6] !== null && doc.querySelectorAll(".nav-tab")[6] !== undefined) {
            if (doc.querySelectorAll(".nav-tab")[6].getAttribute("class") === "nav-tab nav-tab-active") {
                if (doc.querySelectorAll("input")[0].getAttribute("checked") === "checked") {
                    doc.querySelectorAll(".form-table")[1].style.display = "none";
                } else {
                    doc.querySelectorAll(".form-table")[1].style.display = "block";
                }
                doc.querySelectorAll("input")[0].addEventListener("click", function () {
                    doc.querySelectorAll(".form-table")[1].style.display = "none";
                });
                doc.querySelectorAll("input")[1].addEventListener("click", function () {
                    doc.querySelectorAll(".form-table")[1].style.display = "block";
                });
            }
        }
        /**
         * 流程图选项卡
         * 根据选项显示或者隐藏
         */
        if (doc.querySelectorAll(".nav-tab")[7] !== null && doc.querySelectorAll(".nav-tab")[7] !== undefined) {
            if (doc.querySelectorAll(".nav-tab")[7].getAttribute("class") === "nav-tab nav-tab-active") {
                if (doc.querySelectorAll("input")[0].getAttribute("checked") === "checked") {
                    doc.querySelectorAll(".form-table")[1].style.display = "none";
                    doc.querySelectorAll(".form-table")[2].style.display = "none";
                } else {
                    doc.querySelectorAll(".form-table")[1].style.display = "block";
                    doc.querySelectorAll(".form-table")[2].style.display = "block";
                }
                doc.querySelectorAll("input")[0].addEventListener("click", function () {
                    doc.querySelectorAll(".form-table")[1].style.display = "none";
                    doc.querySelectorAll(".form-table")[2].style.display = "none";
                });
                doc.querySelectorAll("input")[1].addEventListener("click", function () {
                    doc.querySelectorAll(".form-table")[1].style.display = "block";
                    doc.querySelectorAll(".form-table")[2].style.display = "block";
                });
            }
        }
        /**
         * 时序图选项卡
         * 根据选项显示或者隐藏
         */
        if (doc.querySelectorAll(".nav-tab")[8] !== null && doc.querySelectorAll(".nav-tab")[8] !== undefined) {
            if (doc.querySelectorAll(".nav-tab")[8].getAttribute("class") === "nav-tab nav-tab-active") {
                if (doc.querySelectorAll("input")[0].getAttribute("checked") === "checked") {
                    doc.querySelectorAll(".form-table")[1].style.display = "none";
                    doc.querySelectorAll(".form-table")[2].style.display = "none";
                    doc.querySelectorAll(".form-table")[3].style.display = "none";
                } else {
                    doc.querySelectorAll(".form-table")[1].style.display = "block";
                    doc.querySelectorAll(".form-table")[2].style.display = "block";
                    doc.querySelectorAll(".form-table")[3].style.display = "block";
                }
                doc.querySelectorAll("input")[0].addEventListener("click", function () {
                    doc.querySelectorAll(".form-table")[1].style.display = "none";
                    doc.querySelectorAll(".form-table")[2].style.display = "none";
                    doc.querySelectorAll(".form-table")[3].style.display = "none";
                });
                doc.querySelectorAll("input")[1].addEventListener("click", function () {
                    doc.querySelectorAll(".form-table")[1].style.display = "block";
                    doc.querySelectorAll(".form-table")[2].style.display = "block";
                    doc.querySelectorAll(".form-table")[3].style.display = "block";
                });
            }
        }
    });
})(jQuery, document);