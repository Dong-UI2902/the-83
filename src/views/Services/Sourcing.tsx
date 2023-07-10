import React from "react";
import Layout from "../../components/Layout/Layout";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ListCard from "./quang-cao/ListCard";
import ForumIcon from "@mui/icons-material/Forum";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import InventoryIcon from "@mui/icons-material/Inventory";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ChecklistIcon from "@mui/icons-material/Checklist";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import FormRegister from "../../components/FormRegister/FormRegister";

function Sourcing() {
  return (
    <div>
      <Box
        sx={{
          height: "65vh",
          backgroundImage: "url('/assets/img/sourcing/bg-header.jpeg')",
          backgroundPosition: "center 100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingTop: "50px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#00000080",
            height: "100%",
            paddingTop: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              color: "var(--light-color)",
            }}
          >
            <h1 className="title">
              Tìm nguồn hàng phát triển hệ thống kinh doanh
            </h1>
            <center>
              <p style={{ color: "var(--light-color)" }}>
                Các nguồn hàng hiện tại không ổn định, giá thành cao, khó cạnh
                tranh trên thị trường thì việc tìm nguồn hàng tốt là yêu cầu cấp
                bách.
              </p>
            </center>
          </Box>
        </Box>
      </Box>
      <Layout
        props={{
          paddingTop: "70px",
          position: "relative",
        }}
      >
        <Box sx={{ maxWidth: "1224px", margin: "0 auto" }}>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <h1>Nguồn bán hàng Online uy tín & giá rẻ</h1>
              <p>
                Kinh doanh online mặc dù là một xu hướng đã mở đường làm giàu
                thành công cho rất nhiều người nhưng chắc chắn, đây không phải
                là con đường trải sẵn hoa hồng. Một trong những thử thách đầu
                tiên khi bắt tay vào quá trình tự kinh doanh đó chính là tìm
                kiếm nguồn hàng. Nếu bạn cần tìm nơi hỗ trợ tìm kiếm và nhập
                hàng chất lượng, giá rẻ thì THE 83 là sự lựa chọn tuyệt vời dành
                cho bạn.
              </p>
            </Grid>
            <Grid item md={6}>
              <img
                width="100%"
                style={{ borderRadius: "20px" }}
                src="/assets/img/sourcing/1.jpg"
              />
            </Grid>
          </Grid>
        </Box>
        <Box className="section">
          <center>
            <h1>Tại sao bạn cần dịch vụ hỗ trợ tìm nguồn hàng?</h1>
          </center>
          <Grid container spacing={4}>
            {ListItem.map((item, index) => (
              <Grid item md={6} key={index}>
                <Card
                  variant="outlined"
                  sx={{ height: "100%", p: 7, textAlign: "center" }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
                      {item.name}
                    </Typography>
                    <p>{item.desc}</p>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box className="section">
          <center>
            <h1>Lợi ích khi sử dụng dịch vụ của THE 83</h1>
            <p>
              Với hơn 6 năm kinh nghiệm trong việc tìm kiếm nguồn hàng cho hàng
              trăm khách hàng, THE 83 thấu hiểu được nhu cầu về dịch vụ của
              khách hàng, THE 83 tự tin là bến đỗ cho các bạn, đặc biệt là các
              bạn mới bước chân vào kinh doanh, giúp bạn giải đáp các thắc mắc,
              băn khoăn về dự định nhập hàng và giúp bạn kết nối được với những
              nhà cung cấp uy tín.
            </p>
          </center>
          <ListCard list={ListItem2} />
        </Box>
        <Box className="section">
          <Grid container alignItems="end" spacing={4} justifyContent="center">
            <Grid item md={5}>
              <img
                style={{ borderRadius: "20px" }}
                width="100%"
                src="/assets/img/sourcing/quy-trinh.png"
              />
            </Grid>
            <Grid item md={5}>
              <h1>Quy trình triển khai</h1>
              <p>
                <strong>Bước 1:</strong> Khách hàng liên hệ THE 83 để tìm nguồn
                hàng.
              </p>
              <p>
                <strong>Bước 2:</strong> THE 83 gửi báo giá tìm nguồn hàng đến
                khách hàng. Nếu khách hàng đồng ý, 2 bên tiến hành ký hợp đồng.
              </p>
              <p>
                <strong>Bước 3:</strong> Khách hàng gửi thông tin cụ thể (mẫu
                mã, số lượng) để THE 83 tìm nguồn phù hợp.
              </p>
              <p>
                <strong>Bước 4:</strong> THE 83 tìm nguồn và đưa ra list các nhà
                cung cấp để khách hàng lựa chọn.
              </p>
              <p>
                <strong>Bước 5:</strong> THE 83 làm việc với nhà cung cấp để đưa
                hàng về.
              </p>
              <p>
                <strong>Bước 6:</strong> Nhập hàng, vận chuyển và giao nhận hàng
                cho khách.
              </p>
              <p>
                <strong>Bước 5:</strong> Tư vấn, hỗ trợ sau nhập hàng.
              </p>
            </Grid>
          </Grid>
        </Box>
        <FormRegister />
      </Layout>
    </div>
  );
}

const ListItem = [
  {
    name: "Không có đủ thời gian và chi phí sang nước ngoài tìm đối tác",
    desc: "Một trong những phương thức vẫn được nhiều doanh nghiệp lựa chọn khi muốn kiểm chứng mức độ uy tín của nhà cung cấp là tìm gặp trực tiếp nhà cung cấp, tuy rằng cách này có thể phần nào đảm bảo được chất lượng của sản phẩm cũng như của nhà sản xuất, nhưng bạn sẽ phải bỏ ra rất nhiều thời gian và chi phí, và nếu như nhà cung cấp sau khi các bạn gặp không thực sự uy tín như các bạn mong đợi, thì sẽ rất lãng phí",
  },
  {
    name: "Rào cản ngôn ngữ",
    desc: "Từ trước đến nay, ngôn ngữ vẫn luôn là một rào cản lớn trong mua bán thương mại quốc tế. Mặc dù hiện nay, tiếng Anh đã được sử dụng rất thông dụng tại nhiều quốc gia, tuy nhiên, đôi khi, để việc trao đổi thông tin giữa người mua và người bán được hiệu quả, bạn bắt buộc phải sử dụng ngôn ngữ của người bán.",
  },
  {
    name: "Không có kinh nghiệm đàm phán, giao dịch",
    desc: "Trong kinh doanh, kỹ năng đàm phán, giao dịch đóng vai trò cực kỳ quan trọng quyết định đến sự thành công của doanh nghiệp, đến việc xây dựng mối quan hệ mua bán lâu dài. Tuy nhiên, thực tế, để hiệu quả đàm phán với nhà cung cấp được cao, thì không phải ai cũng biết cách làm, đặc biệt là với những bạn mới bước chân vào kinh doanh. ",
  },
  {
    name: "Không tự mình xác minh được sự uy tín của nhà cung cấp",
    desc: "Bạn hoàn toàn có thể tìm được các tiêu chí để đánh giá, xác minh được mức độ uy tín của nhà cung cấp trên mạng Internet, tuy nhiên để biết cách đánh giá nhà cung cấp dựa trên các tiêu chí này thì không phải là dễ. Và uy tín của nhà cung cấp càng khó xác minh hơn khi thủ đoạn lừa đảo của nhiều nhà xưởng ở nước ngoài ngày càng tinh vi",
  },
];

const ListItem2 = [
  {
    name: "Giao dịch – đàm phán chuyên nghiệp",
    desc: "Với kinh nghiệm làm việc với hàng trăm nhà cung cấp, đặc biệt là các xưởng sản xuất tại Trung Quốc, THE 83 chắc chắn giúp bạn tìm được nguồn hàng ưng ý. Với kỹ năng giao dịch, đàm phán chuyên nghiệp cùng với vốn kiến thức về ngành hàng, THE 83 tự tin rằng, có thể giúp bạn xây dựng mối quan hệ kinh doanh lâu dài với nhà cung cấp, đảm bảo cả 2 bên cùng có lợi.",
    icon: <ForumIcon sx={{ fontSize: "5rem" }} />,
  },
  {
    name: "Hàng tốt – Giá cực tốt",
    desc: "Trong hơn 8 năm vận hành, THE 83 đã có kinh nghiệm làm việc với rất nhiều nhà cung cấp của nhiều ngành hàng khác nhau, cũng như xúc tiến được rất nhiều lô hàng, quan hệ với nhiều đối tác nước ngoài, đặc biệt là Trung Quốc rất ổn định, nên có thể đảm bảo với các bạn rằng, có thể mang đến cho khách hàng những lợi thế về nguồn hàng cực tốt, hàng chất lượng với mức giá tối ưu. ",
    icon: <ThumbUpOffAltIcon sx={{ fontSize: "5rem" }} />,
  },
  {
    name: "Chọn lựa nhà cung cấp uy tín",
    desc: "Ngoài những tiêu chí cơ bản để đánh giá nhà cung cấp, THE 83 có những tiêu chí riêng để lựa chọn nhà cung cấp, đảm bảo với khách hàng về chất lượng của nguồn hàng. Ngoài ra, với mỗi lô hàng được xúc tiến, sau khi nhận được hàng, THE 83 luôn luôn lắng nghe, tiếp nhận phản hồi của khách hàng để đánh giá lại lần nữa nhà cung cấp. Với kinh nghiệm tiến hành nhập khẩu nhiều lô hàng, khách hàng hoàn toàn có thể tin tưởng vào THE 83.",
    icon: <InventoryIcon sx={{ fontSize: "5rem" }} />,
  },
  {
    name: "Thanh toán đơn giản",
    desc: "THE 83 cung cấp nhiều giải pháp thanh toán khác nhau cho khách hàng, dựa vào tình hình thực tế để đưa ra phương thức thanh toán hợp lý nhất, với mức phí tối ưu nhất. Không chỉ vậy, THE 83 còn đảm bảo với khách hàng về thời gian chuyển tiền, cam kết chuyển tiền nhanh chóng, uy tín.",
    icon: <CreditScoreIcon sx={{ fontSize: "5rem" }} />,
  },
  {
    name: "Giấy tờ pháp lý đầy đủ – hợp đồng rõ ràng",
    desc: "Với mỗi khách hàng khi sử dụng dịch vụ tìm nguồn hàng của THE 83, công ty đều tiến hành ký kết hợp đồng với khách hàng, quy định rõ nghĩa vụ và trách nhiệm của các bên. Các bạn hoàn toàn có thể tin tưởng rằng, nếu có bất cứ vấn đề nào xảy ra trong quá trình sử dụng dịch vụ của THE 83, chúng tôi luôn luôn đứng ra giải quyết, đảm bảo quyền lợi của khách hàng.",
    icon: <ChecklistIcon sx={{ fontSize: "5rem" }} />,
  },
  {
    name: " Được chăm sóc từ A – Z cho tới khi hàng về kho của bạn",
    desc: "Bên cạnh dịch vụ chính là  tìm nguồn hàng, THE 83 còn cung cấp nhiều giải pháp Logistics khác để đưa hàng về kho của bạn. Chúng tôi không chỉ dừng lại ở việc tìm ra nhà cung cấp hợp lý cho bạn, mà còn cùng bạn trên hành trình nhập hàng về kho, giải đáp và đưa ra những giải pháp phù hợp nếu có bất cứ phát sinh nào trong quá trình nhập hàng.",
    icon: <WarehouseIcon sx={{ fontSize: "5rem" }} />,
  },
];

export default Sourcing;
