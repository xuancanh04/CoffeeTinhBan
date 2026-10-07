"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

export type Locale = "vi" | "en";

/* ------------------------------------------------------------------ */
/*  Translation dictionaries                                           */
/* ------------------------------------------------------------------ */

export const translations = {
  vi: {
    /* ── Nav ── */
    nav: {
      about: "Giới thiệu",
      menu: "Thực đơn",
      services: "Dịch vụ",
      contact: "Liên hệ",
      ariaMain: "Điều hướng chính",
      ariaMobile: "Điều hướng di động",
      closeMenu: "Đóng menu",
      openMenu: "Mở menu",
      skipNav: "Bỏ qua điều hướng, đến nội dung chính",
    },

    /* ── Footer ── */
    footer: {
      navigation: "Điều hướng",
      menuAbout: "Giới thiệu",
      menuProducts: "Thực đơn & Cà phê đóng gói",
      menuServices: "Dịch vụ",
      menuContact: "Liên hệ",
      quickContact: "Liên hệ nhanh",
      phone: "Điện thoại",
      copyright: "Giữ quyền sử dụng nội dung trên website này.",
    },

    /* ── Home ── */
    home: {
      heroSubtitle: "Cà phê rang xay nguyên chất",
      heroIntro:
        "Thưởng thức tại quán, mang về cà phê bột hoặc hạt — và cá nhân hóa hương vị với dịch vụ rang xay riêng biệt.",
      scrollDown: "Cuộn xuống khám phá",
      badgeCrafted: "Rang xay mộc nguyên chất • Đắk Lắk",
      stat1Number: "100%",
      stat1Label: "Hạt mộc nguyên chất",
      stat2Number: "Tươi mới",
      stat2Label: "Rang xay theo mẻ nhỏ",
      stat3Number: "Toàn quốc",
      stat3Label: "Đóng gói chuyển phát nhanh",
      storyEyebrow: "Câu chuyện khởi nguồn",
      storyTitle: "Giữ một chữ “Thật” giữa những vội vã",
      storyDesc1: "Coffee Tình Bạn bắt đầu từ một trăn trở giản dị: Làm sao giữ trọn vị cà phê mộc nguyên bản giữa nhịp sống hối hả. Không phụ gia, không hương liệu tạo mùi, chỉ có hạt chín mọng tuyển chọn và ngọn lửa canh chuẩn từng độ nhiệt.",
      storyDesc2: "Mỗi vị khách ghé qua đều là một người bạn tri âm. Dù uống tại quán hay mua về nhà, chúng tôi luôn tận tâm trao gửi hương vị chân phương nhất.",
      storyReadMore: "Đọc toàn bộ câu chuyện",
      servicesEyebrow: "Dịch vụ & Trải nghiệm",
      servicesTitle: "Một không gian nhỏ trọn vẹn giá trị cà phê",
      servicesSubtitle:
        "Nhanh chóng, thân thiện, và luôn giữ trọn sự nguyên bản trong từng hạt.",
      service1Title: "Cà phê tại quán",
      service1Text:
        "Không gian nhỏ nhắn nhưng ấm cúng và gần gũi. Chúng tôi phục vụ cà phê pha phin truyền thống, đen đá mộc mạc và sữa đá đậm đà, được pha chế tỉ mỉ để đúng với gu thưởng thức quen thuộc của từng vị khách.",
      service2Title: "Cà phê bột & hạt",
      service2Text:
        "Cung cấp cà phê bột và hạt mộc nguyên chất 100% từ Đắk Lắk. Mỗi gói đều được bảo quản trong túi có van thoát khí 1 chiều cao cấp, giữ trọn vẹn hương thơm, rất tiện lợi dùng tại nhà hoặc làm quà biếu tặng.",
      service3Title: "Rang xay theo yêu cầu",
      service3Text:
        "Dịch vụ rang xay cá nhân hoá chuyên nghiệp. Bạn có thể tự do tùy chỉnh mức độ rang (Light, Medium, Dark) và kích thước hạt xay (micron) chuẩn xác để phù hợp nhất với các dụng cụ pha chế như phin, máy Espresso hay Pour-over.",
      learnRoasting: "Tìm hiểu dịch vụ rang xay",
      todayEyebrow: "Thực đơn chọn lọc",
      todayTitle: "Hương vị được yêu thích mỗi sớm mai",
      todaySubtitle:
        "Từ những giọt phin nhỏ chậm rãi tại quầy cho đến những gói hạt vừa hạ nhiệt từ lồng rang.",
      interactive3dEyebrow: "Trải Nghiệm Tương Tác 3D",
      interactive3dTitle: "Khám Phá Cấu Trúc Từng Ly Cà Phê 3D",
      interactive3dSubtitle: "Xoay góc nhìn 360 độ, bật/tắt phin nhôm chảy giọt, thêm đá viên và xem tỉ lệ chiết xuất chuẩn xác của từng thức uống đặc trưng.",
      viewMenu: "Khám phá thực đơn",
      viewFullMenu: "Xem toàn bộ thực đơn & sản phẩm",
      contactNow: "Liên hệ quán",
      call: "Gọi",
      reviewsEyebrow: "Khách Hàng Nói Gì",
      reviewsTitle: "Đánh Giá & Tình Cảm Từ Những Người Bạn Gu Mộc",
      reviewsSubtitle: "Từng lời nhắn gửi, từng ngụm cà phê quen thuộc mỗi ban mai là động lực để Coffee Tình Bạn giữ trọn chất mộc mỗi ngày.",
      review1Author: "Anh Quốc Tuấn",
      review1Role: "Khách quen uống tại quán",
      review1Text: "Sáng nào đi làm cũng phải ghé Tình Bạn làm ly đen đá không đường. Cà phê đậm chất mộc, thơm nồng tự nhiên, không bao giờ có mùi khét bơ hay vị gắt cổ. Uống quen rồi đi chỗ khác không chịu nổi.",
      review1Tag: "Cà phê đen đá mộc",
      review2Author: "Chị Mai Linh",
      review2Role: "Khách đặt mẻ rang xay tại nhà",
      review2Text: "Mình đặt gói bột mộc Robusta rang Medium về pha phin tại nhà. Cà phê mới rang gửi về thơm nức cả gian bếp, bột mịn vừa khít phin không bị nghẹt. Chủ quán tư vấn cực kỳ có tâm, đúng gu đậm vừa hậu ngọt của mình.",
      review2Tag: "Cà phê mộc rang vừa",
      review3Author: "Bác Hoàng Nam",
      review3Role: "Khách quen hơn 4 năm",
      review3Text: "Quán giữ được cái chữ 'Tình Bạn' đúng nghĩa. Từ cái ấm nước trà mời khách đến ly nâu đá đều chu đáo, đậm đà nhưng êm dịu, không gian mộc mạc thư thái. Hạt rang chuẩn vị, tôi giới thiệu cho cả hội bạn già đều mê.",
      review3Tag: "Cà phê sữa đá & Hạt rang",
      review4Author: "Anh Duy Khang",
      review4Role: "Chủ quán cà phê đối tác",
      review4Text: "Dịch vụ rang xay theo yêu cầu ở đây kiểm soát profile nhiệt rất đều tay. Từng mẻ hạt giao đến đều đồng nhất màu sắc, hương thơm thanh sạch. Rất yên tâm khi hợp tác lâu dài cùng Tình Bạn.",
      review4Tag: "Dịch vụ rang xay mộc",
      bannerCtaTitle: "Cùng trò chuyện về gu cà phê của bạn",
      bannerCtaDesc: "Dù bạn cần một ly cà phê đậm đà để khởi động ngày mới hay muốn tìm mức rang chuẩn vị nhất cho gian bếp nhà mình, hãy nhắn ngay cho chúng tôi.",
      chatZalo: "Nhắn Zalo tư vấn ngay",
    },

    /* ── About (Câu chuyện mộc) ── */
    about: {
      eyebrow: "Giới thiệu",
      title: "Coffee Tình Bạn: Khi Tách Cà Phê Giữ Trọn Sự Chân Thật",
      quote:
        "“Có những quán mở ra để đuổi theo những trào lưu lộng lẫy, nhưng cũng có những góc nhỏ chọn ở lại với sự mộc mạc nơi cà phê là tấm lòng, và mỗi vị khách ghé qua đều được đối đãi như một người bạn tri âm.”",
      sec1Title: "Khởi nguồn từ một chữ “Thật” giữa những vội vã",
      sec1P1_1: "Coffee Tình Bạn",
      sec1P1_2:
        " bắt đầu không phải từ một tham vọng lớn, mà từ một trăn trở rất đỗi giản dị: Làm sao để giữ được một ly cà phê mộc và thật trọn vẹn giữa nhịp sống ngày càng vội vã?",
      sec1P2_start: "Chữ ",
      sec1P2_that: "“thật”",
      sec1P2_mid:
        " ở đây không phải khẩu hiệu, mà là nguyên tắc sống còn trong từng việc nhỏ nhặt nhất. Đó là nguồn hạt minh bạch từ những nông trại tử tế, nơi trái chín được hái chọn bằng tay. Đó là ngọn lửa trong lồng rang được người thợ canh chừng tỉ mỉ, để hạt chín đều từ lõi mà không cháy khét bề mặt, giữ lại trọn vẹn vị chua thanh tự nhiên, vị ngọt hậu êm ái chứ không dùng phụ gia che lấp.",
      sec1P3:
        "Và chữ “thật” còn nằm ở từng hạt bột rơi xuống phin: đúng độ mịn, chuẩn kích thước để giọt cà phê chắt lọc ra mang hương vị chân phương nhất.",
      sec1Quote:
        "Chúng tôi hiểu rằng, đối với người Việt, cà phê phin không đơn thuần là một thức uống nạp năng lượng. Đó là khoảng lặng đầu ngày, là khoảnh khắc nhìn từng giọt đen sánh nhỏ xuống đáy ly để tĩnh tâm trước khi bước vào guồng quay bộn bề.",
      img1Caption: "Chắt chiu từng giọt cà phê mộc nguyên bản",
      img2Caption: "Hạt cà phê tuyển chọn, rang mộc giữ trọn hương vị lõi",

      sec2Title: "Đứng ngoài trào lưu để lắng nghe từng nếp quen",
      sec2P1_1:
        "Giữa thời buổi các xu hướng đồ uống thay đổi từng tuần, ",
      sec2P1_2:
        " chọn cho mình một nhịp điệu chậm rãi và trầm lặng hơn. Chúng tôi không theo đuổi những công thức màu mè hay không gian check-in ồn ào. Thay vào đó, chúng tôi dành toàn bộ sự chú ý để lắng nghe những người khách quen mỗi sớm mai.",
      img3Caption: "Dành trọn sự chú ý để lắng nghe những người khách quen mỗi sớm mai",
      cust1Label: "Bác hàng xóm:",
      cust1Text:
        " Ghé vội lấy một ly phin đen mang đi với thói quen “uống thật đậm để tỉnh người”.",
      cust2Label: "Cô nhân viên văn phòng:",
      cust2Text:
        " Chỉ thích vị đắng dịu, thêm một chút sữa béo nhẹ nhàng.",
      cust3Label: "Những người bạn tự pha tại nhà:",
      cust3Text:
        " Cứ vài tuần lại ghé quán, vừa nhâm nhi tách trà vừa hỏi han: “Hôm nay có mẻ rang nào mới không?”, “Mức rang này sáng mai pha phin hay French Press thì đượm vị hơn?”.",
      sec2P2_1: " trân trọng từng câu hỏi, từng sở thích nhỏ ấy. Với chúng tôi, cà phê ngon không có một chuẩn mực bất di bất dịch áp đặt cho tất cả mọi người; ",
      sec2P2_highlight:
        "một ly cà phê thực sự ngon là ly cà phê phù hợp nhất với khẩu vị, tâm trạng và thói quen của người thưởng thức.",

      sec3Title: "Dịch vụ rang xay mang hương vị về nhà",
      sec3Intro:
        "Chính từ sự lắng nghe bền bỉ ấy, dịch vụ rang xay theo yêu cầu của Coffee Tình Bạn đã hình thành như một mảnh ghép cốt lõi. Chúng tôi muốn biến gian bếp của bạn thành một quầy pha chế thu nhỏ, nơi bạn luôn có thể tự tay làm ra tách cà phê chuẩn vị như đang ngồi tại quán.",
      card1Title: "Tùy biến nguồn hạt",
      card1Text:
        "Bạn có thể tự mang mẻ hạt thân quen mà mình sưu tầm được ghé quán, hoặc chọn ngay những mẻ hạt Arabica, Robusta mộc hảo hạng đang có sẵn tại kệ của Tình Bạn.",
      card2Title: "Kiểm soát profile rang riêng biệt",
      card2Text:
        "Chúng tôi không rang hàng loạt công nghiệp. Từng mẻ rang được giữ ở quy mô vừa đủ (small batch) để kiểm soát nhiệt chuẩn xác: rang sáng (Light) thanh thoát, rang vừa (Medium) tròn đầy cân bằng, hay rang đậm (Dark) đượm vị đắng nồng nàn truyền thống.",
      card3Title: "Xay chuẩn cỡ cho từng dụng cụ",
      card3Text:
        "Một mẻ hạt tuyệt hảo sẽ bị lãng phí nếu xay sai độ mịn. Chúng tôi căn chỉnh máy xay chuyên dụng đúng từng micron: từ cỡ mịn vừa vặn cho phin không tắc nghẽn, cỡ mịn tơi xốp cho Espresso, đến cỡ thô đồng đều cho Pour-over hay Cold Brew.",

      sec4Title: "Một lời mời thân tình, dù bạn ở gần hay xa",
      sec4Welcome: "Quán luôn mở cửa để đón bạn ghé qua:",
      sec4Item1: "Thử một ngụm phin đậm đà trước giờ đi làm.",
      sec4Item2: "Chọn mua một túi hạt mộc vừa mới hạ nhiệt từ lồng rang mang về.",
      sec4Item3: "Hay đơn giản là ngồi lại chuyện trò đôi ba câu về cà phê cùng người đứng quầy.",
      sec4ZaloNote:
        "Nhưng nếu khoảng cách địa lý hay công việc bận rộn khiến bạn chưa thể ghé trực tiếp, bạn chỉ cần gửi một tin nhắn nhỏ qua Zalo. Hãy nói cho chúng tôi biết bạn thích uống đậm hay thanh, ở nhà bạn đang dùng dụng cụ pha gì. Chúng tôi sẽ cùng bạn trao đổi cặn kẽ về mức rang phù hợp nhất trước khi bấm nút khởi động mẻ rang. Từng gói cà phê sau đó sẽ được đóng gói cẩn thận và chuyển phát tận tay bạn trên mọi miền đất nước.",
      img4Caption: "Đóng gói cẩn thận, chuyển phát tận tay bạn trên mọi miền đất nước",
    },

    /* ── Rang xay ── */
    roasting: {
      eyebrow: "Dịch vụ",
      title: "Rang xay cà phê tại Coffee Tình Bạn",
      subtitle:
        "Hạt của bạn hay của quán. Chúng tôi rang chuẩn nhiệt, xay đúng cỡ để tách cà phê tại nhà luôn tròn vị như tại quầy.",
      intro: "Dịch vụ rang xay cà phê của Tình Bạn ra đời từ mong muốn mỗi vị khách đều có thể thưởng thức ly cà phê trọn vẹn tại nhà. Chúng tôi không rang công nghiệp hàng loạt, mà tỉ mỉ kiểm soát từng mẻ rang nhỏ để đảm bảo độ tươi mới và hương vị tối ưu nhất.",
      level1Name: "Rang nhạt (Light)",
      level1Desc:
        "Mức rang nhạt giữ lại tối đa đặc tính nguyên bản của hạt cà phê. Tách cà phê sẽ nổi bật với vị chua thanh sáng (acid), hương hoa cỏ và trái cây tự nhiên. Rất lý tưởng cho phương pháp pha Pour Over (V60, Chemex) hoặc Cold Brew để thưởng thức trọn vẹn hương vị bản địa.",
      level2Name: "Rang vừa (Medium)",
      level2Desc:
        "Mức rang phổ biến nhất, mang lại sự cân bằng hoàn hảo giữa độ ngọt caramel và vị đắng dịu êm. Cà phê rang vừa có thể pha phin mộc mạc, hoặc dùng cho máy Espresso gia đình đều cho ra lớp crema óng ả và hậu vị ngọt kéo dài.",
      level3Name: "Rang đậm (Dark)",
      level3Desc:
        "Mức rang đậm dành cho những ai đam mê gu cà phê mạnh mẽ truyền thống. Hạt cà phê phát triển thể chất (body) rất dày, giảm thiểu vị chua, thay vào đó là hương chocolate đắng, gia vị nồng nàn. Lựa chọn tuyệt vời nhất để pha cà phê sữa đá đậm đà.",
      ctaTitle: "Bạn đã có gu rang riêng chưa?",
      ctaDesc:
        "Nhắn Zalo hoặc gọi — chúng tôi sẽ hỏi vài câu ngắn về cách pha và khẩu vị, rồi đề xuất mức rang phù hợp.",
      ctaZalo: "Liên hệ rang xay qua Zalo",
      backMenu: "← Quay lại thực đơn",
    },

    /* ── Contact ── */
    contact: {
      eyebrow: "Liên hệ",
      title: "Ghé quán hoặc nhắn một tin",
      subtitle:
        "Gọi trước khi đến xa hoặc khi cần rang xay gấp, chúng tôi sẽ báo giờ phù hợp.",
      infoTitle: "Thông tin",
      address: "Địa chỉ",
      phone: "Điện thoại",
      zaloLabel: "Zalo",
      zaloLink: "Chat Zalo với quán",
      hours: "Giờ mở cửa",
      weekdays: "Trong tuần",
      weekend: "Cuối tuần",
      callNow: "Gọi ngay",
      openZalo: "Mở Zalo",
      directions: "Chỉ đường",
      mapTitle: "Bản đồ quán Coffee Tình Bạn",
      mapNote:
        "Bản đồ Google Maps theo địa điểm quán. Vui lòng gọi trước khi đến xa.",
    },

    /* ── Menu ── */
    menu: {
      eyebrow: "Thực đơn",
      title: "Thực đơn & Cà phê đóng gói",
      subtitle: "Thưởng thức tại quán hoặc mang về, cà phê nguyên chất từng ly.",
      contactOrder: "Nhắn Zalo để đặt trước",
      tabAll: "Tất cả",
      tabDrinks: "Đồ uống",
      tabGround: "Cà phê bột",
      tabBeans: "Cà phê hạt",
      items: {
        "phin-den": {
          name: "Cà phê đen",
          desc: "Pha trực tiếp, đậm vị, hậu ngọt nhẹ — uống nóng hoặc đá.",
        },
        "phin-sua": {
          name: "Cà phê sữa",
          desc: "Sữa đặc vừa phải, cân bằng đắng – ngọt.",
        },
        "bac-xiu": {
          name: "Bạc xỉu",
          desc: "Nhiều sữa, ít cà phê — dễ uống, thơm mùi rang.",
        },
        "bot-phin-500": {
          name: "Cà phê bột Robusta 500g",
          desc: "Rang vừa, xay mịn cho phin — gói hút chân không.",
        },
        "bot-filter-250": {
          name: "Cà phê bột Robusta 1kg",
          desc: "Rang vừa, xay mịn cho phin — gói hút chân không.",
        },
        "hat-arabica": {
          name: "Hạt cà phê Robusta 500g",
          desc: "Hạt sạch, rang xay theo yêu cầu hoặc mua hạt để tự rang xay.",
        },
        "hat-blend": {
          name: "Hạt cà phê Robusta 1kg",
          desc: "Hạt sạch, rang xay theo yêu cầu hoặc mua hạt để tự rang xay.",
        },
      },
    },

    /* ── StickyContact ── */
    sticky: {
      call: "Gọi ngay",
      zalo: "Nhắn Zalo",
    },

    /* ── ThemeToggle ── */
    theme: {
      light: "Chuyển sang giao diện sáng",
      dark: "Chuyển sang giao diện tối",
    },

    /* ── Language toggle ── */
    lang: {
      switchTo: "Switch to English",
      current: "VI",
    },
  },

  en: {
    /* ── Nav ── */
    nav: {
      about: "About",
      menu: "Menu",
      services: "Services",
      contact: "Contact",
      ariaMain: "Main navigation",
      ariaMobile: "Mobile navigation",
      closeMenu: "Close menu",
      openMenu: "Open menu",
      skipNav: "Skip navigation, go to main content",
    },

    /* ── Footer ── */
    footer: {
      navigation: "Navigation",
      menuAbout: "About Us",
      menuProducts: "Menu & Packaged Coffee",
      menuServices: "Services",
      menuContact: "Contact",
      quickContact: "Quick Contact",
      phone: "Phone",
      copyright: "All rights reserved.",
    },

    /* ── Home ── */
    home: {
      heroSubtitle: "Pure Roasted & Ground Coffee",
      heroIntro:
        "Enjoy fresh coffee at our shop, take home ground coffee or whole beans — and customize your roast with our tailored roasting service.",
      scrollDown: "Scroll to explore",
      badgeCrafted: "Pure Roasted & Ground • Dak Lak Origin",
      stat1Number: "100%",
      stat1Label: "Pure unadulterated beans",
      stat2Number: "Fresh Roast",
      stat2Label: "Crafted in small batches",
      stat3Number: "Nationwide",
      stat3Label: "Carefully sealed & shipped",
      storyEyebrow: "Our Origin Story",
      storyTitle: "Preserving Honesty Amidst the Rushing World",
      storyDesc1: "Coffee Tình Bạn began from a simple ambition: How to preserve the true, unadulterated flavor of honest coffee in a busy world. No artificial fillers, no synthetic aromas — just selectively picked ripe cherries roasted to temperature perfection.",
      storyDesc2: "Every guest who visits is a kindred friend. Whether enjoying a cup at our bar or brewing at home, we deliver the most sincere and wholesome coffee experience.",
      storyReadMore: "Read our full story",
      servicesEyebrow: "Our Offerings",
      servicesTitle: "A Cozy Corner — Dedicated to Real Coffee",
      servicesSubtitle:
        "Fast, friendly, and always preserving the authentic essence in every single bean.",
      service1Title: "In-Shop Coffee",
      service1Text:
        "A small but warm and welcoming space. We serve traditional phin-drip coffee, rustic iced black, and rich iced milk coffee, meticulously brewed to perfectly match each guest's unique taste.",
      service2Title: "Ground & Whole Beans",
      service2Text:
        "Providing 100% pure roasted beans and grounds from Dak Lak. Each package is preserved in premium bags with one-way degassing valves to lock in the aroma, perfect for home brewing or as a thoughtful gift.",
      service3Title: "Custom Roasting",
      service3Text:
        "Professional and personalized custom roasting service. You can freely customize the roast level (Light, Medium, Dark) and precise grind size (micron) to best suit your brewing equipment, whether it's a traditional phin, Espresso machine, or Pour-over.",
      learnRoasting: "Explore Roasting Service",
      todayEyebrow: "Today's Picks",
      todayTitle: "Customer Favorites Every Morning",
      todaySubtitle:
        "From slow drip cups trickling at the bar to fragrant bags cooling from the roaster.",
      interactive3dEyebrow: "Interactive 3D Experience",
      interactive3dTitle: "Explore Each Coffee Anatomy in Real-Time 3D",
      interactive3dSubtitle: "Orbit 360 degrees, toggle dripping phin filters, add 3D ice cubes, and see authentic extraction ratios for each signature beverage.",
      viewMenu: "Explore Menu",
      viewFullMenu: "View Full Menu & Products",
      contactNow: "Contact Us",
      call: "Call",
      reviewsEyebrow: "Customer Testimonials",
      reviewsTitle: "Heartfelt Reviews From True Coffee Lovers",
      reviewsSubtitle: "Every kind note and every familiar morning sip inspires Coffee Tình Bạn to stay true to our rustic craft every single day.",
      review1Author: "Quoc Tuan",
      review1Role: "Daily in-shop guest",
      review1Text: "Every morning on my way to work, I stop by Tình Bạn for an unsweetened iced black coffee. Truly authentic roasted flavor, naturally aromatic with zero burnt butter or harsh throat burn. Once accustomed, other places simply don't compare.",
      review1Tag: "Pure Iced Black Coffee",
      review2Author: "Mai Linh",
      review2Role: "Home-brewing customer",
      review2Text: "I ordered a bag of medium-roasted Robusta ground coffee for my home phin drip. Freshly roasted, fragrant aroma filled the whole kitchen, perfectly calibrated grind with no filter clogs. The owner consulted with utmost sincerity and matched my sweet aftertaste preference.",
      review2Tag: "Medium Roast Pure Coffee",
      review3Author: "Hoang Nam",
      review3Role: "Regular guest for over 4 years",
      review3Text: "This cafe truly embodies its name 'Friendship'. From the welcoming hot tea kettle to the rich iced milk coffee, everything is thoughtful, robust yet mellow, in an unpretentious atmosphere. I introduced their roasted beans to my senior circle and everyone loves it.",
      review3Tag: "Iced Milk Coffee & Roasted Beans",
      review4Author: "Duy Khang",
      review4Role: "Partner coffee shop owner",
      review4Text: "Their custom roasting service maintains very stable heat profiles. Every batch delivered has consistent roast color and clean, authentic flavors. Extremely confident in our long-term collaboration with Tình Bạn.",
      review4Tag: "Custom Roasting Service",
      bannerCtaTitle: "Let's Chat About Your Coffee Taste",
      bannerCtaDesc: "Whether you need a rich drip to kickstart your morning or seek the ideal roast profile for your home kitchen, drop us a message anytime.",
      chatZalo: "Message via Zalo Now",
    },

    /* ── About (Câu chuyện mộc) ── */
    about: {
      eyebrow: "About Us",
      title: "Coffee Tình Bạn: Where Real Coffee Keeps Its Honesty",
      quote:
        "“Some places open to chase dazzling trends, but some quiet corners choose to stay humble and true — where coffee is made with heartfelt dedication, and every guest is welcomed as a kindred friend.”",
      sec1Title: "Born from Honesty Amidst the Rushing World",
      sec1P1_1: "Coffee Tình Bạn",
      sec1P1_2:
        " started not from a grandiose ambition, but from a heartfelt question: How can we preserve a cup of honest, unadulterated coffee in an increasingly hurried world?",
      sec1P2_start: "The word ",
      sec1P2_that: "“honest”",
      sec1P2_mid:
        " here is not a slogan, but our guiding philosophy in every small deed. It begins with transparent origins from honest farms where ripe cherries are hand-harvested. It lives in the meticulous fire control inside the roasting drum, ensuring beans roast evenly from the core without scorching, preserving authentic bright acidity and a silky sweet aftertaste without artificial additives.",
      sec1P3:
        "And that honesty also lies in every grind falling into the filter: calibrated to exact micron size so each drop yields the cleanest, most unpretentious flavor.",
      sec1Quote:
        "We believe that for Vietnamese coffee lovers, traditional drip coffee is more than just energy in a cup. It is the morning pause — watching each dark drop slowly trickle down, finding peace of mind before the daily rush begins.",
      img1Caption: "Cherishing every drop of authentic pure coffee",
      img2Caption: "Hand-picked beans, roasted to preserve deep core aroma",

      sec2Title: "Stepping Aside from Trends to Listen to Familiar Rituals",
      sec2P1_1:
        "In an era where drink trends come and go every week, ",
      sec2P1_2:
        " chooses a slower, quieter pace. We don't pursue flashy recipes or noisy photo spots. Instead, we dedicate our full attention to listening to our regular guests every morning.",
      img3Caption: "Listening attentively to every guest's daily coffee ritual",
      cust1Label: "The neighborhood uncle:",
      cust1Text:
        " Grabbing a quick black drip coffee with his usual routine: “Make it bold to wake up my morning.”",
      cust2Label: "The office lady:",
      cust2Text:
        " Preferring a gentle bitterness balanced with velvety sweet condensed milk.",
      cust3Label: "Home brewers:",
      cust3Text:
        " Dropping by every couple of weeks, sipping tea while asking: “Any fresh roast batch today?”, “Would this roast taste better on Phin or French Press tomorrow morning?”.",
      sec2P2_1: " cherishes each question and personal nuance. To us, great coffee has no rigid dogma imposed on everyone; ",
      sec2P2_highlight:
        "truly great coffee is the cup that best suits the palate, mood, and daily ritual of the drinker.",

      sec3Title: "Roasting & Grinding Brought to Your Home Kitchen",
      sec3Intro:
        "From this patient listening, our customized roasting service became our core craft. We want to help turn your kitchen into a miniature brewing bar, where you can always brew a cup as authentic as sitting right at our counter.",
      card1Title: "Custom Bean Origins",
      card1Text:
        "Bring your own favorite green beans to our shop, or choose right from our shelf of premium clean Arabica and Robusta beans.",
      card2Title: "Tailored Roast Profiles",
      card2Text:
        "We never roast industrial bulk. Every batch is kept small to precisely control temperatures: bright and floral Light Roast, rounded balanced Medium Roast, or deeply rich traditional Dark Roast.",
      card3Title: "Precision Grinding for Every Brewer",
      card3Text:
        "An exquisite batch is ruined if ground incorrectly. We calibrate our specialized grinders down to each micron: optimal drip size without clogging, fluffy fine for Espresso, or coarse for Pour-over and Cold Brew.",

      sec4Title: "A Warm Invitation, Whether Near or Far",
      sec4Welcome: "Our door is always open to welcome you:",
      sec4Item1: "Taste a bold drip cup before your morning commute.",
      sec4Item2: "Pick up a freshly cooled bag of whole beans straight from the roaster.",
      sec4Item3: "Or simply sit back and chat about coffee with the barista behind the bar.",
      sec4ZaloNote:
        "If distance or busy schedules prevent you from visiting in person, simply message us on Zalo. Let us know if you prefer bold or delicate notes, and what brewing equipment you use at home. We will consult with you thoroughly on the ideal roast level before starting the roaster. Each bag is then carefully packed and shipped directly to your hands anywhere nationwide.",
      img4Caption: "Carefully packaged, delivered to your door nationwide",
    },

    /* ── Rang xay ── */
    roasting: {
      eyebrow: "Services",
      title: "Coffee Roasting at Coffee Tình Bạn",
      subtitle:
        "Bring your own beans or choose from ours — roasted to precise heat and ground to the exact size so your cup at home is always as full-flavored as at our counter.",
      intro: "Our roasting service was born from the desire to let every guest enjoy a perfect cup of coffee at home. We do not mass-roast; instead, we meticulously control small batches to ensure maximum freshness and optimal flavor profiles.",
      level1Name: "Light Roast",
      level1Desc:
        "Light roast preserves the bean's original characteristics. The cup will highlight bright acidity, alongside natural floral and fruity notes. It is highly recommended for Pour Over (V60, Chemex) or Cold Brew methods to fully experience the bean's origin flavor.",
      level2Name: "Medium Roast",
      level2Desc:
        "The most popular roast level, offering a perfect harmony between caramel sweetness and a gentle bitterness. Medium roast works beautifully for traditional drip or home Espresso machines, yielding a rich crema and a lingering sweet finish.",
      level3Name: "Dark Roast",
      level3Desc:
        "Dark roast is crafted for those who love a bold, traditional coffee profile. The beans develop a heavy body with minimal acidity, replaced by intense dark chocolate and spice notes. It is the absolute best choice for a rich Vietnamese iced milk coffee.",
      ctaTitle: "Have a personalized roast profile in mind?",
      ctaDesc:
        "Message us on Zalo or call — we'll ask a few quick questions about your brewing gear and taste, then propose the perfect roast profile.",
      ctaZalo: "Inquire Roasting via Zalo",
      backMenu: "← Back to menu",
    },

    /* ── Contact ── */
    contact: {
      eyebrow: "Contact",
      title: "Visit Us or Drop a Message",
      subtitle:
        "Call ahead before long trips or when you need quick batch roasting, and we will arrange the best timing.",
      infoTitle: "Information",
      address: "Address",
      phone: "Phone",
      zaloLabel: "Zalo",
      zaloLink: "Chat with us on Zalo",
      hours: "Opening Hours",
      weekdays: "Weekdays",
      weekend: "Weekends",
      callNow: "Call Now",
      openZalo: "Open Zalo",
      directions: "Get Directions",
      mapTitle: "Coffee Tình Bạn Location Map",
      mapNote:
        "Google Maps location for our shop. Please call ahead if traveling from afar.",
    },

    /* ── Menu ── */
    menu: {
      eyebrow: "Menu",
      title: "Menu & Packaged Coffee",
      subtitle: "Enjoy at our shop or take away, pure authentic coffee in every cup.",
      contactOrder: "Message Zalo to Pre-order",
      tabAll: "All",
      tabDrinks: "Drinks",
      tabGround: "Ground Coffee",
      tabBeans: "Coffee Beans",
      items: {
        "phin-den": {
          name: "Black Drip Coffee",
          desc: "Freshly brewed drip, bold taste, subtle sweet aftertaste — hot or iced.",
        },
        "phin-sua": {
          name: "Milk Drip Coffee",
          desc: "Balanced condensed milk, harmonious bitter-sweet harmony.",
        },
        "bac-xiu": {
          name: "Bac Xiu (White Coffee)",
          desc: "More milk, gentle coffee touch — easy to sip, rich roasted aroma.",
        },
        "bot-phin-500": {
          name: "Robusta Ground Coffee 500g",
          desc: "Medium roast, finely ground for traditional drip — vacuum sealed.",
        },
        "bot-filter-250": {
          name: "Robusta Ground Coffee 1kg",
          desc: "Medium roast, finely ground for traditional drip — vacuum sealed.",
        },
        "hat-arabica": {
          name: "Robusta Whole Beans 500g",
          desc: "Clean beans, roasted and ground to order or take whole to brew at home.",
        },
        "hat-blend": {
          name: "Robusta Whole Beans 1kg",
          desc: "Clean beans, roasted and ground to order or take whole to brew at home.",
        },
      },
    },

    /* ── StickyContact ── */
    sticky: {
      call: "Call Now",
      zalo: "Message Zalo",
    },

    /* ── ThemeToggle ── */
    theme: {
      light: "Switch to light mode",
      dark: "Switch to dark mode",
    },

    /* ── Language toggle ── */
    lang: {
      switchTo: "Chuyển sang tiếng Việt",
      current: "EN",
    },
  },
} as const;

export type TranslationKey = typeof translations;

/* ------------------------------------------------------------------ */
/*  Context                                                             */
/* ------------------------------------------------------------------ */

interface I18nContextValue {
  locale: Locale;
  t: TranslationKey[Locale];
  toggleLocale: () => void;
  setLocale: (l: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "locale";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("vi");

  /* Hydrate from localStorage on mount */
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored === "vi" || stored === "en") {
        setLocaleState(stored);
        document.documentElement.lang = stored;
      }
    } catch {
      /* ignore */
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    document.documentElement.lang = l;
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "vi" ? "en" : "vi");
  }, [locale, setLocale]);

  return (
    <I18nContext.Provider
      value={{ locale, t: translations[locale], toggleLocale, setLocale }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
