import React, { FC } from "react";
import Layout from "../../components/Layout/Layout";
import { Box } from "@mui/material";
import TableOfContents from "./tableOfContents";

function MarketingOnline() {
  return (
    <div>
      <Layout
        props={{
          paddingTop: "70px",
          position: "relative",
        }}
      >
        <Box maxWidth="1024px" m="0 auto">
          <h1>
            Marketing Online là gì? Cách quảng cáo Marketing Online hiệu quả
          </h1>
          <img
            loading="lazy"
            width="100%"
            style={{
              maxWidth: "900px",
              display: "block",
              margin: "0 auto",
              borderRadius: "30px",
            }}
            src="/assets/img/knowledge/marketing-online-la-gi.jpg"
          />
          <p>
            Marketing chính là cầu nối để sản phẩm, dịch vụ của bạn đến gần với
            người tiêu dùng. Nó không chỉ nâng tầm thương hiệu, mà còn đảm bảo
            cho doanh nghiệp phát triển bền vững. Tuy nhiên, không phải ai cũng
            có thể triển khai quảng cáo Marketing Online thành công. Muốn làm
            được, bạn cần xây dựng chiến lược Marketing Online bài bản, đúng
            trọng tâm. Để hiểu rõ hơn Marketing Online là gì, hãy cùng The7 khám
            phá thông tin qua bài viết dưới đây.
          </p>
        </Box>
        <Box>
          <TableOfContents />
        </Box>
      </Layout>
    </div>
  );
}

export default MarketingOnline;
