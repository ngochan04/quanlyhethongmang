
    <script>
       document.addEventListener("DOMContentLoaded", function () {
    function showContent(part) {
        const title = document.getElementById("content-title");
        const text = document.getElementById("content-text");
        const contentBox = document.getElementById("project-content");

        // Xóa trạng thái active trước đó
        document.querySelectorAll(".project-item").forEach(item => {
            item.classList.remove("active-content");
            item.style.backgroundColor = "transparent";
        });

        // Đánh dấu item được chọn
        const clickedItem = document.querySelector(`.item${part}`);
        if (clickedItem) {
            clickedItem.classList.add("active-content");
            const borderColor = window.getComputedStyle(clickedItem).borderColor;
            clickedItem.style.backgroundColor = borderColor;
        }

        // Nội dung chi tiết cho từng phần
        const contentData = {
            1: { 
                title: "Chương 1: Tổng quan dự án", 
                text: `
                    <p>Tên dự án: <b>Xây dựng hệ thống Windows Server và tích hợp PfSense Firewall cho doanh nghiệp vừa và nhỏ</b>.</p>
                    <p>Dự án này sẽ đưa ra giải pháp tối ưu hoá cho việc xây dựng một server domain controller đảm nhận vai trò như cấp DHCP, DNS, Active Directory User and Computer và các chính sách áp dụng cho từng bộ phận với đối tượng là doanh nghiệp vừa và nhỏ.</p>
                    <p>Bên cạnh việc xây dựng một hệ thống mạng được quản trị tối ưu thì còn có sự góp mặt của <strong>Pfsense Firewall</strong> giúp củng cố "hàng phòng thủ" của hệ thống, vừa là giải pháp tiết kiệm và xử lý hiệu quả các tác vụ bảo mật cho doanh nghiệp vừa và nhỏ.</p>
                    <h4>1. Mục tiêu</h4>
                        <p>Dự án này hướng đến việc xây dựng một hệ thống quản trị mạng và bảo mật tối ưu, phù hợp với doanh nghiệp vừa và nhỏ. Cụ thể, hệ thống sẽ:
                        <br> ✅ Triển khai Domain Controller để quản lý người dùng và tài nguyên mạng một cách tập trung.
                        <br> ✅ Cấu hình DHCP, DNS nhằm tự động cấp phát địa chỉ IP và tối ưu hóa quản lý mạng.
                        <br>✅ Tích hợp Firewall PfSense giúp bảo vệ hệ thống khỏi các mối đe dọa từ bên ngoài, kiểm soát truy cập và tối ưu hiệu suất mạng.
                        <br>✅ Tạo một mô hình thực nghiệm trên nền tảng máy ảo (VMware), giúp kiểm tra và đánh giá tính hiệu quả trước khi áp dụng vào thực tế.</p>
                    <h4>2.Lý do chọn đề tài :</h4>
                        <p>Công nghệ phát triển nhanh chóng, tạo ra nhiều cơ hội nhưng cũng đặt ra thách thức lớn về bảo mật và quản trị hệ thống thông tin. Doanh nghiệp nhỏ thường chưa có giải pháp tối ưu trong việc quản lý hệ thống mạng và bảo vệ dữ liệu, dẫn đến các vấn đề:
                            <br>🔹 Hệ thống tổ chức lỏng lẻo, không có cấu trúc quản trị tập trung.
                            <br>🔹 Thiếu giải pháp bảo mật, dễ bị tấn công hoặc rò rỉ dữ liệu.
                            <br>🔹 Không có nhân sự chuyên trách, khó duy trì hệ thống ổn định.
                                    Với kinh nghiệm thực tập tại một công ty kinh doanh giải pháp CNTT, tôi nhận thấy rằng nhiều doanh nghiệp chưa đầu tư đúng mức vào hệ thống quản trị và bảo mật. Hacker không bỏ qua doanh nghiệp nhỏ, vì vậy cần có một giải pháp tiết kiệm nhưng hiệu quả, giúp doanh nghiệp vừa và nhỏ vận hành an toàn và ổn định trên nền tảng công nghệ số.
                                    Dự án này sẽ mô phỏng một giải pháp quản trị và bảo mật hệ thống dành cho doanh nghiệp nhỏ, sử dụng các công nghệ Windows Server và PfSense Firewall, nhằm tối ưu chi phí mà vẫn đảm bảo hiệu quả cao.</p>
                    <h4>3. Tính ứng dụng thực tế:</h4>
                        <p> 🔹 Mô hình này có thể được triển khai thực tế tại các doanh nghiệp vừa và nhỏ với ngân sách hạn chế.
                            <br>🔹 Dễ dàng mở rộng nếu doanh nghiệp phát triển, chỉ cần nâng cấp tài nguyên server.
                            <br>🔹 Áp dụng linh hoạt: Có thể chạy trên máy vật lý hoặc máy ảo trên cloud tùy theo điều kiện của doanh nghiệp.
                            <br>🔹 Giảm thiểu rủi ro bảo mật, nâng cao hiệu quả quản trị hệ thống và tiết kiệm chi phí thuê nhân sự IT chuyên sâu.
                        </p>
                    <h4>4. Hướng phát triển: </h4>
                    <p> 🔹 Mở rộng hệ thống bảo mật: Triển khai thêm VPN Server, VLAN để tối ưu hóa kiểm soát truy cập.
                        <br>🔹 Tích hợp giải pháp giám sát: Thêm logging, IDS/IPS để phát hiện và ngăn chặn xâm nhập trái phép.
                        <br>🔹 Nâng cấp hệ thống ảo hóa: Kiểm thử trên nền tảng Cloud (AWS, Azure) để so sánh hiệu suất với máy ảo nội bộ.
                        <br>🔹 Mở rộng ứng dụng: Nếu doanh nghiệp cần, có thể tích hợp Web Server, Mail Server trên nền tảng Windows Serv</p>
                    <h4>5. Kết luận: </h4>
                    <p>Dự án này không chỉ giúp tôi tổng hợp lại kiến thức về quản trị hệ thống Windows Server và bảo mật mạng, mà còn là một mô hình mô phỏng có tính ứng dụng thực tế cao, giúp doanh nghiệp vừa và nhỏ tối ưu hệ thống mà không tốn quá nhiều chi phí. Đồng thời, đây cũng là một cách chứng minh năng lực trước nhà tuyển dụng trong lĩnh vực System Administration & Network Security.
                    <br>
                    <b>Đây sẽ là nền tảng giúp tôi phát triển chuyên môn và sẵn sàng cho công việc thực tế! 🔥</p><b>
                `
            },
            2: { title: "Chương 2: Mô Hình Mạng", 
            text: ` Chương này sẽ trình bày mô hình mạng và mô hình lab thực nghiệm.
              <h2> 1. Hệ thống mạng trong bài Lab được chia thành các vùng sau: </h2>
              <p> <i>Trong dự án này, tôi đưa ra giải pháp cấu hình quản trị hệ thống bằng Windows Server và bảo mật bằng pfSense để phục vụ các 
                công nghệ quan trọng như AD DS, DHCP, DNS, VPN và bảo mật mạng. Với quy mô của doanh nghiệp vừa và nhỏ, mô hình chỉ cần WAN và LAN là đủ,
                 giúp hệ thống đơn giản, dễ quản lý nhưng vẫn đảm bảo hiệu quả và bảo mật. Việc thêm DMZ hay nhiều lớp mạng không thực sự cần thiết, vì những
                  dịch vụ quan trọng có thể bảo vệ bằng firewall, VLAN và các chính sách truy cập chặt chẽ trong nội bộ. Giải pháp này tối ưu thay vì phức tạp 
                  hóa, đảm bảo tính thực tiễn và hiệu suất. Cho nên hệ thống mạng sẽ được chia thành các vùng sau: </i></p>
                <p>-	<b>WAN:</b> sử dụng địa chỉ được cấp từ DHCP của Router.</p>
                -	    <b>LAN 1 (vùng quản trị) </b> , cấu hình IP tĩnh:
                <li style ="list-style: none; margin-left:20px">    <b>Network:</b> 192.168.2.0</li>
                <li style ="list-style: none; margin-left:20px">    <b>SubnetMask:</b> 255.255.255.0</li>
                <li style ="list-style: none; margin-left:20px">    <b>Default Gateway:</b> 192.168.2.10 (IP LAN 2 pfsense) </li>
                <li style ="list-style: none; margin-left:20px">    <b>DNS:</b> 192.168.2.11 (IP LAN DC2019) </li>

            -	<b>LAN 2 (vùng nội bộ)</b>, cấu hình nhận IP động từ pfSense:
                <li style ="list-style: none; margin-left:20px">    <b>Network:</b> 192.168.3.0</li>
                <li style ="list-style: none; margin-left:20px">    <b>SubnetMask:</b> 255.255.255.0</li>
                <li style ="list-style: none; margin-left:20px">    <b>Default Gateway:</b> 192.168.3.10 (IP LAN 1 pfsense) </li>
                <li style ="list-style: none; margin-left:20px">    <b>DNS:</b> 192.168.2.11 (IP LAN DC2019) </li>

                <figure style="text-align: center;">
                    <img src="/image/Mohinhmang.png" alt="Sơ đồ mạng" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 1.1. Mô hình mạng sử dụng cho bài Lab.
                    </figcaption>
                </figure>

             <h2> 2. Mô hình lab - Cấu trúc mạng: </h2>
                <h4>2.1. Domain Controller (DC2019): </h4>
              <ul>
                <li><b>Vai trò:</b> Quản lý domain, xác thực user, cấp phát chính sách GPO.</li>
                <li><b>Phần cứng:</b>
                    <ul>
                        <li>CPU: 2 Core.</li>
                        <li>RAM: 2GB.</li>
                        <li>Storage: 100GB</li>
                        <li>Card mạng: 1 LAN (vmnet 1).</li>
                    </ul>
                </li>
                <li><b>Phần mềm:</b> Windows Server 2019.</li>
            <li><b>Số lượng:</b> 1</li>
                <li><b>Dịch vụ:</b> Active Directory Domain Service, DNS, GPO policy.</li>
            </ul>
                <figure style="text-align: center;">
                    <img src="image/DC/thong so CH DC.png" alt="Sơ đồ mạng" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 1.2. Cài đặt Domain Controller 2019 trên VMware .
                    </figcaption>
                </figure>
        
            <h4>2.2. PfSense (Firewall)</h4>
                <ul>
                    <li><b>Vai trò:</b> Firewall.</li>
                    <li><b>Phần cứng:</b>
                        <ul>
                            <li>CPU: 2 Core.</li>
                            <li>RAM: 512MB.</li>
                            <li>Storage: 20GB.</li>
                            <li>Card mạng: 2 NIC (WAN- NAT và LAN 1- vmnet 1; LAN 2- vmnet 2).</li>
                        </ul>
                    </li>
                    <li><b>Phần mềm:</b> PfSense 2.7.0</li>
                    <li><b>Số lượng:</b> 1</li>
                    <li><b>Dịch vụ:</b>DHCP, firewall.</li>
                </ul>
                <figure style="text-align: center;">
                    <img src="image/pfsense/Thong so CH.png" alt="thông số pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 1.3. Thông số cài đặt của Pfsense.
                    </figcaption>
                </figure>
                <h4>2.3. Client (Máy trạm)</h4>
                    <ul>
                        <li><b>Vai trò:</b> Máy người dùng, kết nối domain, chạy ứng dụng.</li>
                        <li><b>Phần cứng:</b>
                            <ul>
                                <li>CPU: 2 Core.</li>
                                <li>RAM: 1GB.</li>
                                <li>Storage: 60GB.</li>
                                <li>Card mạng: 1 LAN (vmnet 1).</li>
                            </ul>
                        </li>
                        <li><b>Phần mềm:</b> Windows 10.</li>
                        <li><b>Số lượng:</b> 2</li>
                        <li><b>Dịch vụ:</b> Test thử các GPO, DHCP, DNS, VPN.</li>
                    </ul>
             
                 <figure style="text-align: center;">
                    <img src="image/Client/Windows 10 copy.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 1.4. Thông số cài đặt của  Windows 10.
                    </figcaption>
                </figure>
              
                `},
            3: { title: "Chương 3: Windows Server", 
            text: `
            Chương này sẽ giới thiệu về vai trò của Windows Server, các dịch vụ quan trọng và Cấu hình cơ bản cho Windows Server.
                <h2> 1. Vai trò của Windows Server</h2>
                <ul>
                    <p>Windows Server là hệ điều hành dùng để quản lý và vận hành hệ thống mạng doanh nghiệp. Nó cung cấp các dịch vụ quan trọng như:</p>
                        <ul>
                            <li>Quản lý Domain (Active Directory).</li>
                            <li>Cung cấp dịch vụ DNS.</li>
                            <li> Triển khai chính sách bảo mật (GPO).</li>
                            <li> Lưu trữ và chia sẻ dữ liệu (File Server).</li>
                        </ul>
                    </li>
                </ul>
                 <h2> 2. Các dịch vụ quan trọng trong Windows Server</h2>
                     <p>Dưới đây là những dịch vụ cần thiết khi triển khai mô hình mạng:</p>
                 <h4>Active Directory Domain Services (AD DS): </h4>
                    <ul>
                        <li> <strong>Chức năng:</strong> Quản lý user, nhóm, máy tính trong hệ thống domain.
                        <li> <strong>Ứng dụng:</strong> Xác thực người dùng khi đăng nhập vào hệ thống
                        <li> <strong>Thành phần chính:</strong></li>
                            <ul>
                                <p><strong>- Domain Controller (DC):</strong> Máy chủ chính quản lý domain.</p>
                                <p><strong>- OU (Organizational Unit):</strong>Tổ chức user và máy tính theo nhóm.</p>
                                <p><strong>- GPO (Group Policy Object):</strong> Định cấu hình chính sách bảo mật.</p>
                            </ul>
                    </ul>
                <h4>Domain Name System (DNS)</h4>
                     <ul>
                        <li> <strong>Chức năng:</strong> Phân giải tên miền sang địa chỉ IP.</li>
                        <li> <strong>Ứng dụng:</strong> Giúp các máy tính truy cập tài nguyên dễ dàng hơn.</li>
                    </ul>
                <h4> File Server</h4>
                    <ul>
                            <li> <strong>Chức năng:</strong>  Lưu trữ và chia sẻ dữ liệu giữa các máy trong hệ thống.</li>
                            <li> <strong>Ứng dụng:</strong> Tạo thư mục dùng chung cho người dùng trong công ty.</li>
                    </ul>
                <h2>3. Cấu hình cơ bản cho Windows Server:</h2>
                <h4>3.1. Cài đặt IP Tĩnh </h4>
                <p> Vì là máy chủ nên bắt buộc phải để địa chỉ IP cố định để tránh trường hợp các dịch vụ chạy trên Server bị lỗi hay xung đột. </p>
                     <figure style="text-align: center;">
                        <img src="image/DC/IP tinh.png" alt="ip tinh" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 1.5.Cấu hình IP tĩnh trên card LAN DC2019</strong>.
                        </figcaption>
                    </figure>
                <h4>3.2. Cài đặt Active Directory Domain Services</h4>
                    <p>Active Directory Domain Services (AD DS) là một thành phần quan trọng trong hệ thống mạng Windows Server. 
                        Việc cài đặt Active Directory Domain Services (AD DS) giúp quản lý tập trung, bảo mật dữ liệu, kiểm soát 
                        truy cập và nâng cao hiệu suất cho hệ thống mạng doanh nghiệp. Trước khi cài đặt AD DS, máy chủ chỉ là một <strong>Standalone Server</strong> trong môi trường WorkGroup tức 
                        là không có khả năng quản lý tập trung. Nâng cấp máy chủ thành Domain Controller với tên miền là <strong>quantrimang.com</strong> 
                        giúp việc quản lý user, thiết bị, phân quyền và áp dụng Group Policy (GPO) sẽ dễ dàng hơn rất nhiều.
                    </p>
                    <h3> Các bước cài đặt:</h3>
                    <p><strong>Bước 1:</strong> Chọn Add role and feature, ở bước Server Roles chọn <strong>Active Directory Domain Services</strong>.</p>
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/AD DS/addrole.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 1.6. Mở Add role  and feature.</strong>.
                        </figcaption>
                    </figure>
                    <p><strong>Bước 2:</strong> Chọn next để bắt đầu.</p>
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/AD DS/1.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 1.7. Next để bắt đầu.</strong>.
                        </figcaption>
                    </figure>
                    <p> <strong>Bước 3:</strong> Chọn Install role</p>
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/AD DS/2.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 1.8. Install role.
                        </figcaption>
                    </figure>
                      <p> <strong>Bước 4:</strong> Chọn cài đặt trên Server hoặc đĩa cứng ảo, bước này mình chọn trên Server.</strong></p>
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/AD DS/3.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 1.9. Chọn Server.
                        </figcaption>
                    </figure>
                    <p> <strong>Bước 5:</strong> Chọn <b>Active Directory Domain Services</b>, sau đó cửa sổ hiện lên chọn <strong>Add features</strong>.</p>
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/AD DS/4.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 2. Chọn Active Directory Domain Services.
                        </figcaption>
                    </figure> 
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/AD DS/5.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 2.1. Chọn Add features.
                        </figcaption>
                    </figure> 
                    <p> <strong>Bước 6:</strong> Next cho đến khi Install</strong>.</p>
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/AD DS/6.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 2.2. Chọn features.
                        </figcaption>
                    </figure> 
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/AD DS/7.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 2.3. Next để tiếp tục.
                        </figcaption>
                    </figure> 
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/AD DS/9.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 2.4. Đang tải xuống dịch vụ.
                        </figcaption>
                    </figure> 
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/AD DS/10.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 2.5. Đã tải xuống dịch vụ.
                        </figcaption>
                    </figure>
                    <p> <strong>Bước 7:</strong>  Chọn <b> Promote this server to a domain controller</b></strong>.</p>
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/AD DS/12.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 2.7. Chọn Promote this server to a domain controller.
                        </figcaption>
                    </figure> 
                <p> <strong>Bước 8:</strong> Chọn Add a new forest -> nhập domain name: <b>quantrimang.com</b></strong>.</p>
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/AD DS/13.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 2.8. Đặt tên domain.
                        </figcaption>
                    </figure> 
                <p> <strong>Bước 9:</strong> Đặt password </strong>.</p>
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/AD DS/14.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 2.9. Đặt password.
                        </figcaption>
                    </figure> 
                <p> <strong>Bước 10:</strong> Chọn next</strong>.</p>
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/AD DS/15.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 3. Chọn next.
                        </figcaption>
                    </figure> 
                <p> <strong>Bước 11:</strong> Tiếp tục next cho đến khi <b> Install</b>.</p>
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/AD DS/16.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 3.1. Chọn next để tiếp tục.
                        </figcaption>
                    </figure> 
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/AD DS/17.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 3.2. Chọn next để tiếp tục.
                        </figcaption>
                    </figure> 
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/AD DS/18.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 3.3. Chọn next để tiếp tục.
                        </figcaption>
                    </figure> 
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/AD DS/19.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 3.4. Chọn Install.
                        </figcaption>
                    </figure> 
                    <p> <strong>Bước 12:</strong> Nâng cấp domain controller thành công.</strong></p>
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/AD DS/20.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 3.5. Nâng cấp domain controller.
                        </figcaption>
                    </figure> 
            `}, 
            4: { title: "Chương 4: Quản Lý User", 
            text: ` 
            <h2>1. Tổng quan về Quản lý User</h2>
                <p> Trong hệ thống mạng doanh nghiệp, việc quản lý user hiệu quả là rất quan trọng. Nếu không có tổ chức rõ ràng, quản trị viên sẽ gặp khó khăn
                     trong việc phân quyền, áp dụng chính sách, và duy trì bảo mật.</p>
                <p> Trong mô hình này, công ty có 2 phòng ban chính: Nội bộ và IT. Nếu tất cả nhân viên đều nằm chung một nhóm, phòng IT sẽ không thể thực hiện 
                    đúng vai trò quản trị của mình, dẫn đến khó kiểm soát quyền truy cập, bảo mật kém và khó hỗ trợ kỹ thuật</p>
                <p style="color:rgb(167, 18, 18);"><b>Vấn đề đặt ra là</b>:</p>
                <ul>
           
                    <li>Phòng IT cần quyền truy cập vào hệ thống của phòng Nội bộ để hỗ trợ kỹ thuật.</li>
                    <li>Nhân viên phòng Nội bộ chỉ cần làm việc trong mạng nội bộ và truy cập internet, không truy cập vào hệ thống IT.</li>
                </ul>
                <p style="color:rgb(23, 167, 18);"><b>Giải pháp đưa ra là </b>:</p>
                <p>Tạo Organizational Units (OU) cho từng phòng ban giúp:</p>
                <ul>
                    <li>Quản lý tài khoản rõ ràng, dễ dàng phân quyền.</li>
                    <li>Phòng IT có quyền truy cập vào hệ thống Nội bộ nhưng nhân viên Nội bộ không thể truy cập hệ thống IT.</li>
                    <li>Áp dụng chính sách bảo mật phù hợp (VD: Phòng IT có thể dùng công cụ quản trị từ xa, nhưng phòng Nội bộ thì không).</li>
                </ul>
            <h2> 2. Tạo OU -  Quản lý User</h2>
                <p><strong> Bước 1: </strong> Từ Tools chọn Active Directory Users and Computers</p>
                 <figure style="text-align: center;">
                        <img src="image/QL_USER/Users/1.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 3.6. Mở Active Directory Users and Computers.
                        </figcaption>
                    </figure> 
                <p><strong> Bước 2: </strong> Tạo OU Users cho Phòng Nội bộ, IT cũng tương tự.</p>
                <figure style="text-align: center;">
                        <img src="image/QL_USER/Users/NOIBO/1.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 3.7. Tạo OU Users cho phòng nội bộ và IT.
                        </figcaption>
                </figure> 
                <p><strong> Bước 3: </strong> Tạo User cho 2 phòng, phòng nội bộ gồm 3 Users( 2 nhân viên, 1 quản lý) và 2 Group (1 Group nhân viên và một Group quản lý); phòng IT gồm 4 Users (2 nhân viên hỗ trợ, 2 admin) và 2 Group (1 nhóm hỗ trợ và 1 nhóm admin).</p>
                <figure style="text-align: center;">
                        <img src="image/QL_USER/Users/NOIBO/2.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 3.8. Users & Groups của phòng nội bộ.
                        </figcaption>
                </figure> 
                <figure style="text-align: center;">
                        <img src="image/QL_USER/Users/IT/OU IT.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 3.9. Users & Groups của phòng IT.
                        </figcaption>
                </figure> 
                <p><strong> Bước 4: </strong> Thêm Users vào Group tương ứng trong Phòng Nội Bộ</p>
                 <figure style="text-align: center;">
                        <img src="image/QL_USER/Users/NOIBO/G NV.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 4. Thêm user nhân viên vào group nhân viên.
                        </figcaption>
                </figure> 
                <figure style="text-align: center;">
                        <img src="image/QL_USER/Users/NOIBO/G QL.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 4.1. Thêm user Quản lý vào group Quản lý.
                        </figcaption>
                </figure> 
                 <p><strong> Bước 5: </strong> Thêm Users vào Group tương ứng trong Phòng IT</p>
                 <figure style="text-align: center;">
                        <img src="image/QL_USER/Users/IT/G IT HT.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 4.2. Thêm user nhân viên hỗ trợ vào group nhân viên hỗ trợ.
                        </figcaption>
                </figure> 
                <figure style="text-align: center;">
                        <img src="image/QL_USER/Users/IT/G IT Admin.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 4.3. Thêm user admin vào group admin.
                        </figcaption>
                </figure> 
            <h2>3. Triển khai các chính sách.</h2>
            <h3>3.1. Chính sách Nhóm (Group Policy)</h3>
                <h3>* MỤC TIÊU: </h3>
               <h4>Phòng nội bộ:</h4>
                <ul>
                    <li>Chỉ có quyền truy cập tài nguyên nội bộ và internet.</li>    
                    <li>Không được truy cập vào các hệ thống quản trị của phòng IT.</li>    
                    <li>Không có quyền cài đặt phần mềm hoặc thay đổi cấu hình hệ thống.</li>    
                </ul>
                <h4> Phòng IT:</h4>
                <ul>
                    <li>Có quyền quản trị hệ thống, truy cập vào tất cả các tài nguyên nội bộ để hỗ trợ kỹ thuật.</li>    
                    <li>Có quyền sử dụng các công cụ từ xa như Remote Desktop, PowerShell Remoting để hỗ trợ phòng Nội bộ.</li>    
                    <li>Được phép cài đặt, cập nhật và gỡ bỏ phần mềm trên các máy tính trong hệ thống.</li>    
                </ul>
            <h3>* TRIỂN KHAI: </h3>
            <h4> Chính sách chặn truy cập Control Panel. </h4>
            <p><strong>Đối tượng triển khai:</strong> Phòng nội bộ.</p>
            <p><strong>Bước 1:</strong> Mở Group Policy Management, Tạo GPO <b>Block Control Panel</b> trên OU Phong Noi Bo</p>
            <ul>
                <li>Mở Run (Windows + R) → nhập gpmc.msc → Enter.</li>
                  <figure style="text-align: center;">
                        <img src="image/QL_USER/GPO/Block Control Panel/1.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 4.4. Tạo GPO trên OU Phong Noi Bo.
                        </figcaption>
                </figure>
                <li>Nhập tên chính sách: Block Control Panel_PNB</li>
                  <figure style="text-align: center;">
                    <img src="image/QL_USER/GPO/Block Control Panel/2.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 4.5. Đặt tên cho GPO.
                    </figcaption>
                </figure>
            <p><strong>Bước 2:</strong> Thiết lập chính sách: </p>
                <li> Chọn edit mở cửa sổ Group Policy Management Editor -> User Configuration -> Administrative Temple -> Control Panel -> Prohibit access to Control Panel and PC settings -> Properties -> Enable -> OK :</li>
                 <figure style="text-align: center;">
                    <img src="image/QL_USER/GPO/Block Control Panel/4.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 4.6. Chọn edit mở cửa sổ Group Policy Management Editor.
                    </figcaption>
                </figure> 
                <figure style="text-align: center;">
                    <img src="image/QL_USER/GPO/Block Control Panel/5.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 4.7. Nhấn OK để hoàn tất.
                    </figcaption>
                </figure> 
            <p><strong>Bước 3:</strong> Kiểm tra: Chạy lệnh <b> gpupdate /force </b> trên DC2019, sau đó chạy trên PC đăng nhập User của Phòng nội bộ. </p>
                <li> Mở hộp thoại cmd trên <b>DC2019</b></li>
                <figure style="text-align: center;">
                    <img src="image/QL_USER/GPO/Block Control Panel/6.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 4.8. Mở hộp thoại cmd.
                    </figcaption>
                </figure> 
                <li> Chạy lệnh <b> gpupdate /force</b></li>
                <figure style="text-align: center;">
                    <img src="image/QL_USER/GPO/Block Control Panel/7.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 4.9. Chạy lệnh  gpupdate /force trên DC2019.
                    </figcaption>
                </figure>
                <li>Đăng nhập User Phòng Nội Bộ trên <b>Asus</b></li>
                <figure style="text-align: center;">
                    <img src="image/QL_USER/GPO/Block Control Panel/Dangnhap Client.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 5. Đăng nhập User phòng nội bộ.
                    </figcaption>
                </figure>
                <li> Chạy lệnh gpupdate /force trên user <b>nbnv1</b></li>
                <figure style="text-align: center;">
                    <img src="image/QL_USER/GPO/Block Control Panel/gpupdate.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 5.1. Chạy lệnh  gpupdate /force trên user <b>nbnv1</b>.
                    </figcaption>
                </figure>
                <li>Kiểm tra xem user đã nhận được chính sách chưa: gpresult /r</li>
                <figure style="text-align: center;">
                    <img src="image/QL_USER/GPO/Block Control Panel/gpresult.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 5.2. User PNB đã nhận được  GPO Block Control Panel_PNB.
                    </figcaption>
                </figure>
                <li>Triển khai thành công chính sách <b> Block Control Panel_PNB</b>.</li>
                <figure style="text-align: center;">
                    <img src="image/QL_USER/GPO/Block Control Panel/cam thanh cong.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 5.3. Triển khai chính sách thành công.
                    </figcaption>
                </figure>
            </ul>
            <h4> Chính sách chặn truy cập Task Management. </h4>
            <p><strong>Đối tượng triển khai:</strong> Phòng nội bộ.</p>
            <p><strong>Bước 1:</strong> Tạo GPO <b>Block TaskManager_PNB</b> trên OU Phong Noi Bo</p>
            <ul>
                <li>Nhập tên chính sách: Block TaskManager_PNB</li>
                  <figure style="text-align: center;">
                    <img src="image/QL_USER/GPO/Block TaskManager/Create.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 5.4. Đặt tên cho GPO.
                    </figcaption>
                </figure>
            <p><strong>Bước 2:</strong> Thiết lập chính sách: </p>
            <li>User Configuration → Policies → Administrative Templates → System → Ctrl+Alt+Del Options → Remove Task Manager → Enable → OK</li>
                <figure style="text-align: center;">
                    <img src="image/QL_USER/GPO/Block TaskManager/2.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 5.6. Thiết lập chính sách.
                    </figcaption>
                </figure>
                <figure style="text-align: center;">
                    <img src="image/QL_USER/GPO/Block TaskManager/3.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 5.7. Hoàn tất chính sách.
                    </figcaption>
                </figure>
             <p><strong>Bước 3:</strong> Kiểm tra: Chạy lệnh <b> gpupdate /force </b> trên DC2019, sau đó chạy trên PC đăng nhập User của Phòng nội bộ. </p>
                <li> Mở hộp thoại cmd trên <b>DC2019</b></li>
                <figure style="text-align: center;">
                    <img src="image/QL_USER/GPO/Block Control Panel/6.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 5.8. Mở hộp thoại cmd.
                    </figcaption>
                </figure> 
                <li> Chạy lệnh <b> gpupdate /force</b></li>
                <figure style="text-align: center;">
                    <img src="image/QL_USER/GPO/Block Control Panel/7.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 5.9. Chạy lệnh  gpupdate /force trên DC2019.
                    </figcaption>
                </figure>
                <li> Chạy lệnh gpupdate /force trên User <b>nbnv1</b></li>
                <figure style="text-align: center;">
                    <img src="image/QL_USER/GPO/Block Control Panel/gpupdate.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 6. Chạy lệnh  gpupdate /force trên <b>nbnv1</b>.
                    </figcaption>
                </figure>
                <li>Kiểm tra xem user đã nhận được chính sách chưa: gpresult /r</li>
                <figure style="text-align: center;">
                    <img src="image/QL_USER/GPO/Block TaskManager/4.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 6.1. User <b>nbnv1</b> đã nhận được GPO Block TaskManager_PNB.
                    </figcaption>
                </figure>
                <li>Triển khai thành công chính sách <b>Block TaskManager_PNB</b>.</li>
                <figure style="text-align: center;">
                    <img src="image/QL_USER/GPO/Block TaskManager/5.png" alt="local domain" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 6.2. Triển khai chính sách thành công.
                    </figcaption>
                </figure>
            <ul/>
            <h3> 3.2 Phân quyền Thư Mục (Permission)
                <h4> CẤU TRÚC THƯ MỤC: </h4>
                 <figure style="text-align: center;">
                    <img src="image/QL_USER/Permission/cau truc thu muc.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 6.3. Cấu trúc thư mục.
                    </figcaption>
                </figure>  
                <h4> NGUYÊN TẮC PHÂN QUYỀN: </h4>
                    <p>1. Tắt kế thừa từ thư mục cha để tránh quyền bị áp sai từ <b>Du Lieu Chung</b>.</p>
                    <p>2. Cấp quyền theo nhóm (Group), không cấp cho từng User trừ khi cần.</p>
                    <p>3. Dùng Share Permissions rộng, kiểm soát bằng <strong>NTFS</strong>.</p>
                    <p>4. IT Hỗ Trợ <strong>(G_IT_HT)</strong> → Full Control trong tất cả thư mục con để có thể hỗ trợ khi cần.</p>
                    <p>5. IT Admin <strong>(G_IT_Admin)</strong> → Read & Execute để tránh chỉnh sửa sai ngoài phạm vi cấu hình.</p>
                    <p>6. Quản lí nội bộ <strong>(G_NB_QL)</strong> → Read & Execute trên <strong>Du Lieu Noi Bo </strong>, Full Control trên thư mục cá nhân, Nhân viên nội bộ (G_NB_NV) cũng vậy.</p>
                    <p>7. Ban Giám Đốc <strong>(G_GD)</strong> → Read & Execute trên <strong>Du Lieu BGD </strong>, Full Control trên thư mục cá nhân, Phó Giám Đốc(pgd) cũng vậy.</p>
                    <p>7. IT Admin<strong> (G_IT_Admin)</strong> → Full Control trên <strong>Du Lieu Phong IT </strong>và cá nhân, IT Hỗ trợ (G_IT_HT) → Modify trên  <strong>Du Lieu Phong IT</strong>,Full Control trên thư mục cá nhân, Phó Giám Đốc(pgd) cũng vậy.</p>
                <h4> TRIỂN KHAI: </h4>
                <p> <strong>Bước 1:</strong> Chia sẻ thư mục gốc <b> Du Lieu Cong Ty</b></p>
                 <figure style="text-align: center;">
                    <img src="image/QL_USER/Permission/cau-truc-thu-muc-Dc2019.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 6.4. Tạo thư mục.
                    </figcaption>
                </figure>
                <figure style="text-align: center;">
                    <img src="image/QL_USER/Permission/share-Du lieu cong ty.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 6.5. Share thư mục gốc.
                    </figcaption>
                </figure>  
                <p><strong>Bước 2:</strong> Chia sẻ và phân quyền thư mục phòng<b> Phong BGD</b>.</p>
                <ul>
                <li>Ở <b>Share Permission</b>, cho IT Hỗ trợ (G_IT_HT) → Full control để hỗ trợ & khắc phục sự cố; IT Admin (G_IT_Admin) → Read để tránh chỉnh sửa sai ngoài phạm vi cấu hình; Nhóm BGD (G_GD) → Change, không để Full control để tránh người dùng xoá nhầm Thư mục chung của Phòng Ban.</li>
                 <figure style="text-align: center;">
                    <img src="image/QL_USER/Permission/share- phong BGD.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 6.6. Share thư mục Phong BGD.
                    </figcaption>
                </figure>  
                <li><b>Phân quyền:</b> cho IT Hỗ trợ (G_IT_HT) → Full control để hỗ trợ & khắc phục sự cố; IT Admin (G_IT_Admin) → Read & Execute để tránh chỉnh sửa sai ngoài phạm vi cấu hình; CREATE OWNER → Full Control để User có thể tạo và toàn quyền trên thư mục mình tạo; Ban Giám Đốc (G_GD) → Read, write & execute để đảm bảo user chỉ thao tác được trên thư mục mình tạo.</li>
                 <figure style="text-align: center;">
                    <img src="image/QL_USER/Permission/phan quyen BGD.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 6.7. Phân quyền trên thư mục Phong BGD.
                    </figcaption>
                </figure>
                </ul>
                <p> <strong>Bước 3:</strong> Chia sẻ và phân quyền thư mục phòng<b> Phong Noi Bo</b>.</p>
                <ul>
                    <li>Ở <b>Share Permission</b>, cho IT Hỗ trợ (G_IT_HT) → Full control; IT Admin (G_IT_Admin) → Read; Nhân viên và Quản lý PNB (G_NB_NV, G_NB_QL) → Change.</li>
                 <figure style="text-align: center;">
                    <img src="image/QL_USER/Permission/share PNB.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 6.8. Share thư mục Phong Noi Bo.
                    </figcaption>
                </figure>  
                <li><b>Phân quyền:</b> cho IT Hỗ trợ (G_IT_HT) → Full control; IT Admin (G_IT_Admin) → Read & Execute; CREATE OWNER → Full Control; Nhóm nhân viên (G_NB_NV) → Read; Nhóm Quản lý (G_NB_QL) → Modify.</li>
                 <figure style="text-align: center;">
                    <img src="image/QL_USER/Permission/phan quyen PNB.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 6.9. Phân quyền trên thư mục Phong Noi Bo.
                    </figcaption>
                </figure>
                </ul>
                 <p> <strong>Bước 4:</strong> Chia sẻ và phân quyền thư mục phòng<b> Phong IT</b>.</p>
                <ul>
                    <li>Ở <b>Share Permission</b>, cho IT Hỗ trợ (G_IT_HT) → Full control; IT Admin (G_IT_Admin) → Change.</li>
                 <figure style="text-align: center;">
                    <img src="image/QL_USER/Permission/share phong IT.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 7. Share thư mục Phong IT.
                    </figcaption>
                </figure>  
                <li><b>Phân quyền:</b> cho IT Hỗ trợ (G_IT_HT) → Modify; IT Admin (G_IT_Admin) → Read, write & Execute; CREATE OWNER → Full Control.</li>
                 <figure style="text-align: center;">
                    <img src="image/QL_USER/Permission/phan quyen IT.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 7.1. Phân quyền trên thư mục Phong IT.
                    </figcaption>
                </figure>
                </ul>
                 <p><strong>Bước 5:</strong> Kiểm tra phân quyền: </p>
                 <p style ="color:rgb(23, 167, 18);font-style:"> <b>TẠO THƯ MỤC CÁ NHÂN </b></p>
                 <p><strong>Mục tiêu: </strong>Xác minh rằng User có thể tự tạo thư mục cá nhân của mình trong thư mục Phòng ban của mình.</p>
                 <p><strong>Thực hiện: </strong>Xác minh rằng User có thể tự tạo thư mục cá nhân của mình trong thư mục Phòng ban của mình.</p>
                <ul>
                    <li>Đăng nhập bằng tài khoản của nhân viên. </li>
                    <li>Truy cập vào thư mục phòng ban tương ứng. </li>
                    <li>Tạo thư mục mới và đặt tên theo quy tắc (tên tương ứng của nhân viên). </li>
                    <li>Kết quả: </li>
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/Permission/tao thu muc BGD.png" alt="thu-muc-con-phong-BGD" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 7.2. Các thư mục cá nhân của<b> Phong BGD</b>.
                        </figcaption>
                    </figure> 
                    <figure>
                        <img src="image/QL_USER/Permission/tao thu muc PNB.png" alt="thu-muc-con-phong-Noi-Bo" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 7.3. Các thư mục cá nhân của<b> Phong Noi Bo</b>.
                        </figcaption>
                    </figure>  
                     <figure>
                        <img src="image/QL_USER/Permission/tao thu muc IT.png" alt="thu-muc-con-phong-IT" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 7.4. Các thư mục cá nhân của<b> Phong IT</b>.
                        </figcaption>
                    </figure> 
                </ul>
                <p style ="color:rgb(23, 167, 18);font-style:"> <b>KIỂM THỬ TRUY CẬP </b></p>
                <p><strong>Mục tiêu: </strong>Đảm bảo user thuộc phòng ban nào thì truy cập được vào phòng ban đó, riêng Phòng IT truy cập được tất cả các phòng.</p>
                <p><strong>Thực hiện: </strong></p>
                <ul>
                    <li>Đăng nhập bằng tài khoản của nhân viên. </li>
                    <li>Truy cập vào thư mục <b> Du Lieu Cong Ty</b> nếu không thuộc phòng ban sẽ không vào được vì không có quyền trên thư mục.</li>
                    <figure>
                        <img src="image/QL_USER/Permission/tao thu muc IT.png" alt="thu-muc-con-phong-IT" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 7.5. Hình ảnh minh hoạ: Nhân viên phòng nội bộ không truy cập được vào thư mục Phong IT</b>.
                        </figcaption>
                    </figure> 
                </ul>
                <p style ="color:rgb(23, 167, 18);font-style:"> <b>CHỈNH SỬA/XOÁ THƯ MỤC CỦA NGƯỜI KHÁC. </b></p>
 
                <p><strong>Mục tiêu: </strong>Đảm bảo user không thể chỉnh sửa hoặc xoá thư mục của nhân viên khác trong cùng Phòng ban</p>
                 <p><strong>Thực hiện: </strong>Xác minh rằng User có thể tự tạo thư mục cá nhân của mình trong thư mục Phòng ban của mình.</p>
                <ul>
                    <li>Đăng nhập bằng tài khoản của nhân viên A. </li>
                    <li>Điều hướng đến thư mục của nhân viên B. </li>
                    <li>Xoá thử thư mục. </li>
                    <li>Kết quả: </li>
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/Permission/khong xoa duoc -Admin.png" alt="thu-muc-con-phong-BGD" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 7.6. IT Admin không xoá được thư mục của IT Hỗ Trợ 2</b>.
                        </figcaption>
                    </figure> 
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/Permission/khong xoa duoc-PGD.png" alt="quyen-tren-thu-muc-khac" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 7.7. Phó Giám Đốc không xoá được thư mục của Giám Đốc.
                        </figcaption>
                    </figure> 
                       <figure style="text-align: center;">
                        <img src="image/QL_USER/Permission/khong xoa duoc qlnb.png" alt="quyen-tren-thu-muc-khac" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 7.8. Quản lý nội bộ không xoá được thư mục của Nhân viên.
                        </figcaption>
                    </figure>
                </ul>
                <p><strong>Bước 5:</strong> Ẩn thư mục không có quyền</p>
                <p style ="color:rgb(23, 167, 18);font-style:"> <b>CẤU HÌNH ACCESS-BASED ENUMERATION(ABE). </b></p>
                <p><strong>Mục tiêu: </strong>Để ẩn thư mục không có quyền truy cập.</p>
                <p><strong>Thực hiện: </strong></p>
                <ul>
                <li>Vào Server Mangager → File and Storage Services → Share. </li>
                    <li>Chọn thư mục đã share (Du Lieu Cong Ty, Phong BGD, Phong Noi Bo, Phong IT) → Properties → Settings </li>
                    <li>Chọn Enable Access-Based Enumeration → Apply → OK. </li>
                    <li>Kết quả: </li>
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/Permission/chi thay thu muc co quyen-BGD.png" alt="cau-hinh-ABE" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 7.9. Nhân viên PNB chỉ thấy thư mục của mình trong <b>Du Lieu Cong Ty</b></b>.
                        </figcaption>
                    </figure> 
                    <figure style="text-align: center;">
                        <img src="image/QL_USER/Permission/chi thay thu muc co quyen-NBNV2.png" alt="cau-hinh-ABE" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 8. NBNV2 Chỉ thấy thư mục của mình</b>.
                        </figcaption>
                    </figure> 
                </ul>
                <p><i> Tương tự, hai phòng ban còn lại cũng chỉ thấy được phòng ban và thư mục cá nhân của mình.</i></p>
                <h4>KẾT LUẬN</h4>
                <p> Hệ thống phân quyền đã được thiết lập đúng yêu cầu, đảm bảo mỗi nhân viên chỉ quản lý được thư mục của mình ( quản lý phòng ban chỉ xem), không ảnh hưởng tới dữ liệu của 
                    người khác. Các nhóm phòng ban có quyền truy cập phù hợp và bảo mật tối ưu.</p>
                `},
            5: { title: "Chương 5:  Firewall & Bảo Mật", 
            text: `
            <h2>1. Giới thiệu về pfSense</h2>
                <p>pfSense là một hệ thống tường lửa (Firewall) và Router mã nguồn mở, giúp quản lý mạng an toàn, hiệu quả. Với khả năng chặn tấn công mạng, lọc truy cập, VPN, Load Balancing, nó đảm bảo hệ thống luôn hoạt động ổn định.</p>
            <h2>2. Vì sao pfSense lại là giải pháp bảo mật phù hợp cho DNVVN?</h2>
                <p> Vì pfSense là hệ thống tường lửa mã nguồn mã và miễn phí, có cộng đồng bản vá lỗi lớn cùng tính năng tường lửa mạnh mẽ.</p>
            <ul>
                <li><strong>Miễn phí & chi phí thấp:</strong> Không cần đầu tư phần cứng đắt đỏ như firewall thương mại.</li>
                <li><strong>Bảo mật mạnh mẽ:</strong>Hỗ trợ IDS/IPS, VPN, chặn truy cập trái phép.</li>
                <li><strong>Dễ dàng quản lý: </strong> Giao diện web trực quan, dễ cấu hình.</li>
                <li><strong>Mở rộng linh hoạt: </strong>Cài thêm tính năng như Proxy, Captive Portal, HA...</li>
            </ul>
            <h2>3. Triển khai và cấu hình PFSENSE </h2>
                <h4>3.1. Cài đặt máy chủ chạy pfSense trên máy ảo VMware Workstation</h4>
                <p>Các thông số cài đặt như hình:</p>
                    <figure style="text-align: center;">
                    <img src="image/pfsense/Thong so CH.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 1.7. Các thông số cài đặt pfsense trên VMware.
                    </figcaption>
                    </figure>    
                <h4>3.2. Hướng dẫn cài đặt và cấu hình pfSense: </h4>        
                    <figure style="text-align: center;">
                    <img src="image/pfsense/Cai dat/Khoidong.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 1.8. Giao diện pfSense khi khởi động.
                    </figcaption>
                    <ul>
                    </figure>
                <p><strong>Bước 1</strong>: Sau khi khởi động hệ thống, một thông báo về bản quyền và phân phối xuất hiện. Chọn Accept để cài đặt. </p>
                    <figure style="text-align: center;">
                    <img src="image/pfsense/Cai dat/pfsense 1.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 1.9. Thông báo về bản quyền và bản phân phối của pfSense.
                    </figcaption>
                    </figure> 
                <p><strong>Bước 2</strong>: Màn hình Welcome xuất hiện, chọn Install, nhấn Ok. </p>
                    <figure style="text-align: center;">
                    <img src="image/pfsense/Cai dat/pfsense 2.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 2. Install pfSense
                    </figcaption>
                    </figure>   
                <p><strong>Bước 3</strong>: Chọn hệ thống tập tin cho firewall pfSense. Chọn Auto (ZFS), chọn Ok để tiếp tục. </p>
                    <figure style="text-align: center;">
                    <img src="image/pfsense/Cai dat/pfsense 3.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 2.1. Chọn hệ thống tập tin cho firewall.
                    </figcaption>
                    </figure>  
                <p><strong>Bước 4</strong>: Tạo phân vùng boot trong ZFS, chọn Proceed with Installation, nhấn Select để cài đặt. </p>
                    <figure style="text-align: center;">
                    <img src="image/pfsense/Cai dat/pfsense 4.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 2.2. Tạo phân vùng boot trong ZFS.
                    </figcaption>
                    </figure> 
                <p><strong>Bước 5</strong>: Chọn stripe để tạo phân vùng lưu trữ tối đa không có dự phòng, nhấn Ok. </p>
                    <figure style="text-align: center;">
                    <img src="image/pfsense/Cai dat/pfsense 5.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 2.3. Tạo phân vùng lưu trữ tối đa không có dự phòng.
                    </figcaption>
                    </figure> 
                <p><strong>Bước 6</strong>: Chọn ổ đĩa cài đặt, nhấn Ok. </p>
                    <figure style="text-align: center;">
                    <img src="image/pfsense/Cai dat/pfsense 6.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 2.4. Chọn ổ đĩa cài đặt.
                    </figcaption>
                    </figure>
                <p><strong>Bước 7</strong>: Nhấn Yes, xác nhận xoá các dữ liệu có trong ổ đĩa đã chọn (Nhớ lưu lại dữ liệu cần thiết trước khi xoá). </p>
                    <figure style="text-align: center;">
                    <img src="image/pfsense/Cai dat/pfsense 7.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 2.5. Xác nhận xoá các dữ liệu có trong ổ đĩa đã chọn.
                    </figcaption>
                    </figure>
                <p><strong>Bước 8</strong>: Pfsense tiến hành cài đặt. </p>
                    <figure style="text-align: center;">
                    <img src="image/pfsense/Cai dat/pfsense 8.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 2.6. Pfsense đang cài đặt.
                    </figcaption>
                    </figure>
                <p><strong>Bước 9</strong>: Đã cài đặt thành công, chọn Reboot để khởi động Pfsense. </p>
                    <figure style="text-align: center;">
                    <img src="image/pfsense/Cai dat/pfsense 9.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 2.7. Chọn Reboot khởi động pfsense.
                    </figcaption>
                    </figure>
                <p><strong>Bước 10</strong>: Giao diện Pfsense khi reboot xong và cấu hình IP tĩnh cho 2 cổng LAN, nhận IP động cho WAN. </p>
                    <figure style="text-align: center;">
                    <img src="image/pfsense/Cai dat/CHCB.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 2.4. Hoàn tất cài đặt và cấu hình mạng.
                    </figcaption>
                    </figure>
           <h4>3.2. Cấu hình cơ bản</h4>
                <p><strong>Bước 1</strong>: Cấu hình IP tĩnh trên máy trạm Lenovo cùng lớp mạng với cổng LAN 1 để truy cập vào giao diện GUI của pfsense. </p>
                    <figure style="text-align: center;">
                    <img src="image/Client/IP client.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 2.5. IP tĩnh trên Lenovo.
                    </figcaption>
                    </figure>
                <p><strong>Bước 2</strong>: Trên máy Lenovo mở trình duyệt web nhập địa chỉ 192.168.2.10 và tiến hành đăng nhập vào hệ thống của pfSense. </p>
                    <figure style="text-align: center;">
                    <img src="image/pfsense/CH PFSENSE 1.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                    <figcaption style="font-style: italic; text-align: center;">
                        Hình 2.6. Màn hình đăng nhập vào hệ thống của firewall pfSense.
                    </figcaption>
                    </figure>
                <p><strong>Bước 3</strong>:  Cấu hình thông tin chung cho tường lửa:</p>
                <ul>
                    <li>Hostname: giữ nguyên mặc định pfSense (có thể thay đổi sau).</li>
                    <li>Domain: quantrimang.com ( để nhất quán hệ thống mạng)</li>
                    <li>Primary DNS Server: 192.168.2.11 địa chỉ của Domain Controller (DC2019).</li>
                    <li> Secondary DNS server: 192.168.2.10, 192.168.3.10 địa chỉ LAN 1, LAN 2 của pfsense.</li>
                    <li>Chỉnh lại Time Server và múi giờ</li>
                </ul>
                  <figure style="text-align: center;">
                <img src="image/pfsense/domain name.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                <figcaption style="font-style: italic; text-align: center;">
                    Hình 2.7. Chỉnh lại domain name.
                </figcaption>
                <figure style="text-align: center;">
                <img src="image/pfsense/CH PFSENSE 3.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                <figcaption style="font-style: italic; text-align: center;">
                    Hình 2.7. Chỉnh lại Time Server và múi giờ.
                </figcaption>
                </figure>
                <figure style="text-align: center;">
                <img src="image/DNS/dns chung.png" style="width:100%; max-width:600px; display: block; margin: auto;">
                <figcaption style="font-style: italic; text-align: center;">
                    Hình 2.8. Thêm Primary DNS Server, Secondary DNS Server.
                </figcaption>
                </figure>
             
            ` },
            6: { title: "Chương 6: Cấu Hình DHCP",
             text: `
             <h2> 1. Tổng quan về dịch vụ DHCP Server</h2>
                <p>Để có thể truy cập và hoạt động trong mạng, mỗi thiết bị cần một địa chỉ IP (IP address) duy nhất để nhận diện. Trong một hệ thống mạng có nhiều thiết bị, nếu 
                    gán địa chỉ IP thủ công cho từng thiết bị sẽ rất tốn thời gian và khó quản lý. Giải pháp cho vấn đề này là sử dụng cấp phát IP động (Dynamic Host Configuration Protocol - DHCP).</p>
                <h4>DHCP là gì? Nó hoạt động như thế nào?</h4>
                <p>DHCP (Dynamic Host Configuration Protocol) là một giao thức giúp tự động cấp phát địa chỉ IP cho các thiết bị trong mạng. Khi một thiết bị mới kết nối, nó sẽ gửi yêu cầu (DHCP Discover) đến máy chủ DHCP.
                    Máy chủ DHCP (ở đây là pfSense) sẽ kiểm tra và gán một địa chỉ IP khả dụng trong phạm vi (range) được cấu hình sẵn. Thiết bị sau đó nhận được IP cùng với thông tin về subnet mask, default gateway và DNS server để có thể kết nối Internet hoặc liên lạc với các thiết bị khác trong mạng</p>
                <h4>Tại sao chọn pfSense làm DHCP Server?</h4>
                <p>Trong hệ thống này, mình lựa chọn cấu hình DHCP trên pfSense không chỉ để cấp phát địa chỉ IP mà còn tận dụng pfSense làm cầu nối giữa hai subnet (LAN 1 và LAN 2). Ngoài việc quản lý IP, pfSense còn mang lại nhiều lợi ích khác:</p>
                <ul>
                    <li><strong>Quản lý tập trung:</strong> Có thể kiểm soát tất cả thiết bị trong mạng từ một nơi.</li>
                    <li><strong>Tường lửa & bảo mật:</strong> Cho phép thiết lập rule firewall để kiểm soát truy cập giữa các VLAN/Subnet.</li>
                    <li><strong>Routing giữa subnet:</strong> Dễ dàng cấu hình để các thiết bị ở LAN 1 có thể giao tiếp với LAN 2.</li>
                    <li><strong>Chức năng mở rộng: :</strong>  Hỗ trợ VPN, Load Balancing, Captive Portal… nếu cần mở rộng hệ thống sau này.</li>
                </ul>
                   <h2> 2. Cấu hình DHCP Server trên pfSense </h2>
                <h4>Tạo và quản lý Scope cấp phát IP</h4>
                <p><strong> Bước 1:</strong> </strong>.</p>
                    <figure style="text-align: center;">
                        <img src="image/DHCP 1.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 1.7. Mở DHCP từ Tools của Server.
                        </figcaption>
                    </figure>
                <p><strong> Bước 2:</strong> Tại cửa sổ DHCP chọn vào Tên máy chủ - IPV4 - New Scope (Scope trong DHCP là một tập hợp địa chỉ IP mà DHCP Server có thể cấp phát 
                    cho các thiết bị trong mạng. Khi tạo Scope, bạn sẽ xác định được dải địa chỉ, subnet mask, gateway, DNS và các tùy chọn khác.)</p>
                    <figure style="text-align: center;">
                        <img src="image/DHCP Score.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 1.8. Giao diện của DHCP.
                        </figcaption>
                    </figure>
                    <figure style="text-align: center;">
                        <img src="image/DHCP Scope 2.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 1.9. Chọn next để bắt đầu tạo Scope.
                        </figcaption>
                    </figure>
                    <figure style="text-align: center;">
                        <img src="image/DHCP Scope 3.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 2. Đặt tên cho Scope.
                        </figcaption>
                    </figure>
                    <p> Chọn dải IP bắt đầu - IP kết thúc, SubnetMask.
                    <figure style="text-align: center;">
                        <img src="image/DHCP Scope 4.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 2.1. Chọn dải IP cấp phát xuống Client.
                        </figcaption>
                    </figure>
                    <p>Bước này dùng để thiết lập thời gian thuê IP (Lease Duration) – khoảng thời gian mà một client có thể giữ một địa chỉ IP trước khi cần gia hạn hoặc lấy IP mới từ DHCP Server.</p>
                    <figure style="text-align: center;">
                        <img src="image/DHCP Scope 5.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 2.2. Thiết lập thời gian giữ IP.
                        </figcaption>
                    </figure>
                    <p> Chọn Default Gateway trỏ về <strong>IP LAN của pfSense ( 192.168.1.10/24)</strong>.Vì pfSense đóng vai trò là Firewall & Router, tất cả traffic từ các thiết bị trong mạng LAN cần đi qua nó để
                         ra ngoài Internet hoặc liên lạc với các subnet khác.
                    <figure style="text-align: center;">
                        <img src="image/DHCP Scope 7.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 2.3. Chọn Default Gateway.
                        </figcaption>
                    </figure>
                    <p> Domain Name và DNS của máy chủ. Thường thì bước này sẽ hiển thị sẵn nếu đã có cài dịch vụ Active Directory Domain Services và Nâng cấp Domain Controller.</p> 
                    <figure style="text-align: center;">
                        <img src="image/DHCP Scope 8.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 2.4. Domain name và DNS.
                        </figcaption>
                    </figure>
                    <p> Chọn <b>Yes</b> để Active Scope.
                     <figure style="text-align: center;">
                        <img src="image/DHCP Scope 9.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 2.5. Active Scope.
                        </figcaption>
                    </figure>
                    <p> Dịch vụ DHCP đã hoạt động.
                     <figure style="text-align: center;">
                        <img src="image/DHCP Scope 10.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 2.6. Dịch vụ DHCP đã hoạt động.
                        </figcaption>
                    </figure>
                <p><strong> Bước 3:</strong> Kiểm tra IP trên máy trạm Windows 10 để xem đã nhận DHCP từ server chưa.</p>
                     <p> Thiết lập nhận IP động trên Windows 10.</p>
                     <figure style="text-align: center;">
                        <img src="image/DHCP Client 1.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 2.7. Thiết lập nhận IP động trên Windows 10.
                        </figcaption>
                    </figure>
                     <p> Windows 10 đã nhận IP đúng với dải DHCP Server cấp phát</p>
                     <figure style="text-align: center;">
                        <img src="image/DHCP Client 2.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 2.8. Windows 10 nhận đúng IP từ DHCP.
                        </figcaption>
                    </figure>
                <h2> 2. Cấu hình DHCP Server nâng cao </h2>
                <h4>2.1  Cấu hình DHCP Reservation (Cấp phát IP cố định)</h4>
                <p> <strong>Mục đích:</strong> Gán một IP tĩnh cho một thiết bị dựa trên địa chỉ MAC (giữ nguyên IP mỗi lần thiết bị kết nối mạng). Việc cấu hình này sẽ gán địa chỉ cố định cho DC và pfSense.</p>
                <p> <strong>Cách thực hiện: </strong></p>
                <p> <strong>Bước 1:</strong> Kiểm tra địa chỉ<strong> MAC: </strong></p>
                    <ul><li><strong>Trên DC: </strong> Nhấn phím 🪟 + R -> Nhập vào CMD -> gõ lệnh <i> ipconfig /all </i>.</li></ul>
                     <figure style="text-align: center;">
                        <img src="image/MAC ADD DC.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 2.9. Địa chỉ MAC của DC.
                        </figcaption>
                    </figure>
                    <ul><li><strong>Trên pfsense:</strong> Chọn Shell -> gõ lệnh <i> ifconfig</i>.</li></ul>
                    <figure style="text-align: center;">
                        <img src="image/MAC PFSENSE.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 3. Địa chỉ MAC của pfSense.
                        </figcaption>
                    </figure>
                <p><strong>Bước 2:</strong> Mở DHCP Manager → Mở Scope → Chọn Reservations → Nhấn New Reservation.</p>
                     <figure style="text-align: center;">
                        <img src="image/DHCP CD 1.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 3.1. Tạo New Reservations.
                        </figcaption>
                    </figure>
                <p><strong>Bước 3:</strong> Nhập thông tin thiết bị: </p>
                    <ul><li>Nhập địa chỉ MAC, IPv4 của Server, Chọn only DHCP, chọn Add</li></ul>
                     <figure style="text-align: center;">
                        <img src="image/DHCP SV.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 3.2. Gán IP cố định cho DC.
                        </figcaption>
                    </figure>
                    <ul><li>Nhập địa chỉ MAC, IPv4 của pfSense, Chọn only DHCP, chọn Add</li></ul>
                    <figure style="text-align: center;">
                        <img src="image/DHCP PFSENSE.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 3.3. Gán IP cố định cho pfSense.
                        </figcaption>
                    </figure>
                    <figure style="text-align: center;">
                        <img src="image/DHCP Reservation..png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 3.4. Cấu hình hoàn tất.
                        </figcaption>
                    </figure>
                <p><strong>Bước 4:</strong> Kiểm tra: </p>
                    <ul><li><i>Trên DC:</i> </li></ul>
                     <figure style="text-align: center;">
                        <img src="image/DHCP SV.png" alt="pfsense" style="width:100%; max-width:600px; display: block; margin: auto;">
                        <figcaption style="font-style: italic; text-align: center;">
                            Hình 3.2. Gán IP cố định cho DC.
                        </figcaption>
                    </figure>

            ` },
            7: { title: "Chương 7: Cấu Hình DNS", text: "Cách thiết lập và quản lý DNS Server để phân giải tên miền." },
            8: { title: "Chương 8: Vận hành & Khắc phục sự cố", text: "Giám sát hệ thống, kiểm tra log sự kiện để phát hiện và xử lý sự cố." },
        };

        // Cập nhật nội dung hiển thị
        title.innerText = contentData[part].title;
        text.innerHTML = contentData[part].text; // Dùng innerHTML để hiển thị nội dung HTML
        contentBox.style.display = "block";
    }

    // Gán sự kiện click cho từng mục dự án
    document.querySelectorAll(".project-item").forEach((item, index) => {
        item.addEventListener("click", () => showContent(index + 1));
    });
});

        </script>
