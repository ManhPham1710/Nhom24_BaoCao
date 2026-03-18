# PHẦN I: MỞ ĐẦU

**1. Tên đề tài**

"Xây dựng Backend Hệ thống Quản lý Thực đơn & Dinh dưỡng Bếp ăn Bán trú (School Meal Planner)"

**"Link demo: https://drive.google.com/file/d/1sG0YiUUg_ekSQ6vVYurnn1rE2PakasHU/view?usp=sharing**

**2. Tính cấp thiết của đề tài**

Tại Việt Nam, hiện nay nhiều trường mầm non và tiểu học có tổ chức bếp ăn bán trú nhằm đảm bảo dinh dưỡng cho học sinh. Tuy nhiên, công tác quản lý thực đơn và dinh dưỡng vẫn còn tồn tại nhiều hạn chế:

-   **Vấn đề quản lý**: Việc xây dựng thực đơn thường thực hiện thủ công, thiếu sự hỗ trợ của hệ thống nên dễ thiếu cân đối dinh dưỡng giữa các nhóm chất (Calo, Protein, Lipid)
-   **Vấn đề tính toán**: Tính toán giá trị dinh dưỡng cho từng bữa ăn mất nhiều thời gian, dễ sai sót nếu không có công cụ hỗ trợ
-   **Vấn đề theo dõi**: Khó kiểm soát khẩu phần ăn theo ngày/tuần và không có báo cáo tổng hợp dinh dưỡng
-   **Vấn đề quản lý kho**: Việc nhập – xuất thực phẩm và dự trù nguyên liệu chưa tối ưu, dễ dẫn đến thiếu hụt hoặc lãng phí
-   **Vấn đề quản trị**: Chưa có hệ thống tập trung để quản lý dữ liệu thực phẩm, thực đơn, dinh dưỡng và mua sắm

**Giải pháp**: Xây dựng hệ thống Backend tập trung giúp tự động hóa việc tính toán dinh dưỡng, quản lý thực đơn, kiểm soát kho thực phẩm và hỗ trợ lập kế hoạch mua sắm một cách chính xác, hiệu quả.

## **3. Mục tiêu đề tài**

Mục tiêu chính của bài tập lớn:

1.  **Thiết kế cơ sở dữ liệu** cho hệ thống quản lý thực đơn và dinh dưỡng
2.  **Xây dựng API Backend** phục vụ các chức năng quản lý thực phẩm, thực đơn, dinh dưỡng và kho
3.  **Triển khai chức năng tính toán dinh dưỡng** tự động (Calo, Protein, Lipid) dựa trên dữ liệu thực phẩm
4.  **Xây dựng chức năng dự trù thực phẩm** từ thực đơn cho số lượng học sinh cụ thể
5.  **Phát triển hệ thống báo cáo** giúp theo dõi dinh dưỡng và tình trạng kho
6.  **Đảm bảo bảo mật hệ thống** thông qua xác thực người dùng (JWT) và phân quyền

**4. Phạm vi công việc**

-   **Phạm vi dữ liệu**: Quản lý thực đơn, thực phẩm và dinh dưỡng cho quy mô tối đa khoảng 500–1000 học sinh
-   **Phạm vi chức năng**:  
    Hệ thống phục vụ 2 nhóm người dùng:

-   **Admin**: Quản lý toàn bộ hệ thống
-   **Chuyên gia dinh dưỡng**: Xây dựng và kiểm tra thực đơn
-   **Nhân viên bếp**: Quản lý kho và thực hiện mua sắm

-   **Phạm vi công nghệ**:

-   Backend: Node.js + Express
-   Database: SQL Server / MySQL
-   API: RESTful

-   **Phạm vi thời gian**: Thực hiện trong 1 kỳ học (2-3 tháng)

# PHẦN II: PHÂN TÍCH ĐỀ TÀI

**1. Phân tích đối tượng sử dụng**

**Nhóm người dùng**

**Vai trò**

**Nhu cầu chính**

Quản trị viên (Admin)

Quản lý hệ thống

Quản lý tài khoản, phân quyền, phê duyệt thực đơn

Chuyên gia dinh dưỡng (Nutritionist)

Xây dựng thực đơn

Tạo thực đơn, tính toán dinh dưỡng, đảm bảo khẩu phần

Nhân viên bếp (Staff)

Thực hiện & vận hành

Xem thực đơn, quản lý nguyên liệu, lập danh sách mua

**2. Phân tích yêu cầu chức năng chính**

**+** **Nhóm chức năng A: Quản lý dữ liệu cơ bản**

-   Quản lý người dùng (**users**)
-   Quản lý thực phẩm (**foods**)
-   Quản lý chất dinh dưỡng (**nutrients**)
-   Liên kết thực phẩm – dinh dưỡng (**food_nutrients**)
-   Quản lý bữa ăn (**meals**)

**+** **Nhóm chức năng B: Quản lý thực đơn & dinh dưỡng**

-   Tạo và quản lý thực đơn theo ngày (**menu_days**)
-   Chi tiết món ăn trong thực đơn (**menu_details**)
-   Tính toán dinh dưỡng tự động (View:

-   view_total_nutrition
-   view_menu_nutrition)

-   Đảm bảo khẩu phần phù hợp với nhu cầu dinh dưỡng

**+** **Nhóm chức năng C: Quản lý kho & mua sắm**

-   Quản lý tồn kho thực phẩm (**inventory**)
-   Kiểm tra trạng thái kho (View: view_inventory_status)
-   Lập danh sách mua hàng (**shopping_list**)
-   Tính toán số lượng cần mua và chi phí (View: view_shopping_summary)

<![if !supportLists]>- <![endif]> **Cơ sở dữ liệu gồm:**

-   **9 bảng**:

-   users
-   foods
-   nutrients
-   food_nutrients
-   meals
-   menu_days
-   menu_details
-   inventory
-   shopping_list

-   **4 View**:

-   view_total_nutrition
-   view_menu_nutrition
-   view_inventory_status
-   view_shopping_summary

# PHẦN III: THIẾT KẾ CƠ SỞ DỮ LIỆU

**1. Sơ đồ Lôgic ER (Entity-Relationship)**
```

+-------+
       | USERS |
       +---+---+
           |
           | 1:N
           ▼
     +-----------+       1:N       +--------------+
     | MENU_DAYS +---------------->| MENU_DETAILS |
     +-----+-----+                 +------+-------+
           |                              |
           |                              | FK: meal_id, food_id
     +-----|----------+                   |
     |     |          |                   ▼
     ▼     ▼          |            +--------------+
 +-------+ +----------+            |    FOODS     |
 | MEALS | | SHOPPING |            +------+-------+
 +-------+ |   LIST   |                   |
           +----------+                   | 1:N
                                          ▼
+-----------+                      +----------------+
| INVENTORY |<---------------------+ FOOD_NUTRIENTS |
+-----------+        FK: food_id   +------+---------+
                                          |
                                          | FK: nutrient_id
                                          ▼
                                   +----------------+
                                   |   NUTRIENTS    |
                                   +----------------+

┌──────────────┐  
│  users  │  
│  │  
│ PK: id  │  
└──────┬───────┘  
│  
│  
│  
▼  
┌──────────────┐  ┌──────────────┐  
│  menu_days  │────────→│ menu_details │  
│  │  1:N  │  │  
│ PK: id  │  │ PK: id  │  
└──────┬───────┘  │ FK: menu_day │  
│  │ FK: meal_id  │  
│  │ FK: food_id  │  
│  └──────┬───────┘  
│  │  
│  │  
▼  ▼  
┌──────────────┐  ┌──────────────┐  
│  meals  │  │  foods  │  
│  │  │  │  
│ PK: id  │  │ PK: id  │  
└──────────────┘  └──────┬───────┘  
│  
▼  
┌──────────────────┐  
│ food_nutrients  │  
│  │  
│ PK: id  │  
│ FK: food_id  │  
│ FK: nutrient_id  │  
└────────┬─────────┘  
│  
▼  
┌──────────────┐  
│  nutrients  │  
│  │  
│ PK: id  │  
└──────────────┘  
  
┌──────────────┐  
│  inventory  │  
│  │  
│ PK: id  │  
│ FK: food_id  │  
└──────────────┘  
  
┌──────────────┐  
│ shopping_list│  
│  │  
│ PK: id  │  
│ FK: menu_day │  
│ FK: food_id  │  
└──────────────┘
```
**2. Chi tiết các bảng dữ liệu**

**Bảng 1: users (Người dùng hệ thống)**
```sql

CREATE  TABLE users  (

id INT  IDENTITY(1,1)  PRIMARY  KEY,

username NVARCHAR(50)  NOT  NULL  UNIQUE,

password  NVARCHAR(255)  NOT  NULL,

full_name NVARCHAR(100)  NOT  NULL,

email NVARCHAR(100)  UNIQUE,

role  NVARCHAR(20)  NOT  NULL  DEFAULT  'staff'

CHECK (role  IN  ('admin','nutritionist','staff')),

is_active BIT  DEFAULT 1,

created_at DATETIME2  DEFAULT  GETDATE(),

updated_at DATETIME2  DEFAULT  GETDATE()

);

GO

**Mô tả**:

-   Lưu thông tin tài khoản đăng nhập hệ thống
-   Phân quyền:

-   admin: quản trị hệ thống
-   nutritionist: chuyên gia dinh dưỡng
-   staff: nhân viên bếp

**Bảng 2: foods (Thực phẩm)**

CREATE  TABLE foods  (

id INT  IDENTITY(1,1)  PRIMARY  KEY,

code NVARCHAR(20)  UNIQUE,

name  NVARCHAR(150)  NOT  NULL,

category NVARCHAR(20)  NOT  NULL  DEFAULT  'other'

CHECK (category IN  ('meat','fish','vegetable','fruit','grain','dairy','egg','oil','other')),

unit NVARCHAR(20)  NOT  NULL  DEFAULT  'kg',

price_per_unit DECIMAL(12,2)  DEFAULT 0,

description  NVARCHAR(MAX),

is_active BIT  DEFAULT 1,

created_at DATETIME2  DEFAULT  GETDATE(),

updated_at DATETIME2  DEFAULT  GETDATE()

);

GO

**Mô tả**:

-   Lưu danh sách nguyên liệu thực phẩm
-   Phân loại: thịt, cá, rau, trái cây, ngũ cốc,...

**Bảng 3: nutrients (Dinh dưỡng)**

CREATE  TABLE nutrients  (

id INT  IDENTITY(1,1)  PRIMARY  KEY,

name  NVARCHAR(100)  NOT  NULL,

unit NVARCHAR(20)  NOT  NULL,

daily_recommended DECIMAL(10,2),

description  NVARCHAR(MAX),

created_at DATETIME2  DEFAULT  GETDATE()

);

GO

**Mô tả**:

-   Lưu thông tin các chất dinh dưỡng (Protein, Lipid, Vitamin...)
-   Dùng để tính khẩu phần ăn

**Bảng 4: food_nutrients (Liên kết thực phẩm - dinh dưỡng)**

-- ============================================================

-- 4. food_nutrients

-- ============================================================

CREATE  TABLE food_nutrients  (

id INT  IDENTITY(1,1)  PRIMARY  KEY,

food_id INT  NOT  NULL,

nutrient_id INT  NOT  NULL,

amount_per_100g DECIMAL(10,3)  NOT  NULL  DEFAULT 0,

created_at DATETIME2  DEFAULT  GETDATE(),

CONSTRAINT uq_food_nutrient UNIQUE (food_id, nutrient_id),

CONSTRAINT fk_fn_food FOREIGN  KEY (food_id)  REFERENCES foods(id)  ON  DELETE  CASCADE,

CONSTRAINT fk_fn_nutrient FOREIGN  KEY (nutrient_id)  REFERENCES nutrients(id)  ON  DELETE  CASCADE

);

GO

**Mô tả**:

-   Thể hiện quan hệ N:N giữa thực phẩm và dinh dưỡng
-   Cho biết 100g thực phẩm chứa bao nhiêu chất

**Bảng 5: meals (Bữa ăn)**

-- ============================================================

-- 5. meals

-- ============================================================

CREATE  TABLE meals  (

id INT  IDENTITY(1,1)  PRIMARY  KEY,

name  NVARCHAR(100)  NOT  NULL,

meal_time NVARCHAR(20)  NOT  NULL

CHECK (meal_time IN  ('breakfast','lunch','dinner','snack')),

description  NVARCHAR(MAX),

created_at DATETIME2  DEFAULT  GETDATE()

);

GO

**Mô tả**:

-   Lưu các loại bữa ăn:

-   sáng, trưa, tối, ăn phụ

**Bảng 6: menu_days (Thực đơn theo ngày)**

-- ============================================================

-- 6. menu_days

-- ============================================================

CREATE  TABLE menu_days  (

id INT  IDENTITY(1,1)  PRIMARY  KEY,

menu_date DATE  NOT  NULL  UNIQUE,

student_count INT  NOT  NULL  DEFAULT 500,

grade_level NVARCHAR(50),

notes NVARCHAR(MAX),

status  NVARCHAR(20)  NOT  NULL  DEFAULT  'draft'

CHECK (status  IN  ('draft','approved','completed')),

created_by INT,

approved_by INT,

created_at DATETIME2  DEFAULT  GETDATE(),

updated_at DATETIME2  DEFAULT  GETDATE(),

CONSTRAINT fk_md_created FOREIGN  KEY (created_by)  REFERENCES users(id),

CONSTRAINT fk_md_approved FOREIGN  KEY (approved_by)  REFERENCES users(id)

);

GO

**Mô tả**:

-   Lưu thực đơn theo từng ngày
-   Có trạng thái: draft, approved, completed

**Bảng 7: menu_details (Chi tiết thực đơn)**

-- ============================================================

-- 7. menu_details

-- ============================================================

CREATE  TABLE menu_details  (

id INT  IDENTITY(1,1)  PRIMARY  KEY,

menu_day_id INT  NOT  NULL,

meal_id INT  NOT  NULL,

food_id INT  NOT  NULL,

quantity_per_student DECIMAL(10,3)  NOT  NULL  DEFAULT 0,

cooking_method NVARCHAR(100),

notes NVARCHAR(MAX),

created_at DATETIME2  DEFAULT  GETDATE(),

CONSTRAINT fk_det_menu FOREIGN  KEY (menu_day_id)  REFERENCES menu_days(id)  ON  DELETE  CASCADE,

CONSTRAINT fk_det_meal FOREIGN  KEY (meal_id)  REFERENCES meals(id),

CONSTRAINT fk_det_food FOREIGN  KEY (food_id)  REFERENCES foods(id)

);

GO

**Mô tả**:

-   Lưu chi tiết từng món ăn trong thực đơn
-   Liên kết:

-   ngày → bữa → món ăn

**Bảng 8: inventory (Kho thực phẩm)**

CREATE  TABLE inventory  (

id INT  IDENTITY(1,1)  PRIMARY  KEY,

food_id INT  NOT  NULL  UNIQUE,

quantity DECIMAL(10,3)  NOT  NULL  DEFAULT 0,

min_quantity DECIMAL(10,3)  DEFAULT 5,

max_quantity DECIMAL(10,3)  DEFAULT 100,

last_updated DATETIME2  DEFAULT  GETDATE(),

CONSTRAINT fk_inv_food FOREIGN  KEY (food_id)  REFERENCES foods(id)  ON  DELETE  CASCADE

);

GO

**Mô tả**:

-   Quản lý tồn kho thực phẩm
-   Cảnh báo thiếu hoặc dư

**Bảng 9: shopping_list (Danh sách mua hàng)**

-- ============================================================

-- 9. shopping_list

-- ============================================================

CREATE  TABLE shopping_list  (

id INT  IDENTITY(1,1)  PRIMARY  KEY,

menu_day_id INT  NOT  NULL,

food_id INT  NOT  NULL,

required_quantity DECIMAL(10,3)  NOT  NULL  DEFAULT 0,

in_stock_quantity DECIMAL(10,3)  DEFAULT 0,

need_to_buy DECIMAL(10,3)  DEFAULT 0,

estimated_cost DECIMAL(12,2)  DEFAULT 0,

status  NVARCHAR(20)  NOT  NULL  DEFAULT  'pending'

CHECK (status  IN  ('pending','purchased','cancelled')),

notes NVARCHAR(MAX),

created_at DATETIME2  DEFAULT  GETDATE(),

updated_at DATETIME2  DEFAULT  GETDATE(),

CONSTRAINT fk_sl_menu FOREIGN  KEY (menu_day_id)  REFERENCES menu_days(id)  ON  DELETE  CASCADE,

CONSTRAINT fk_sl_food FOREIGN  KEY (food_id)  REFERENCES foods(id)

);

GO

**Mô tả**:

-   Tính toán nguyên liệu cần mua
-   Dựa trên:

-   thực đơn
-   tồn kho

**VIEW: Báo cáo & tính toán**

**View 1: Tổng dinh dưỡng**

CREATE  OR  ALTER  VIEW view_total_nutrition AS

SELECT

md.id AS menu_day_id,

md.menu_date,

md.student_count,

n.name  AS nutrient_name,

n.unit AS nutrient_unit,

n.daily_recommended,

ROUND(SUM(det.quantity_per_student * fn.amount_per_100g / 100), 2)  AS amount_per_student,

CASE

WHEN n.daily_recommended > 0

THEN  ROUND(SUM(det.quantity_per_student * fn.amount_per_100g / 100)

/ n.daily_recommended * 100, 1)

ELSE  NULL

END  AS percent_of_recommended

FROM menu_days md

JOIN menu_details  det ON det.menu_day_id = md.id

JOIN food_nutrients fn ON fn.food_id = det.food_id

JOIN nutrients  n ON n.id = fn.nutrient_id

GROUP  BY md.id, md.menu_date, md.student_count,

n.id, n.name, n.unit, n.daily_recommended;

GO

**Mô tả**:

-   Tính tổng dinh dưỡng mỗi ngày
-   So sánh với nhu cầu khuyến nghị

**View 2: Chi tiết dinh dưỡng món ăn**

-- ============================================================

-- VIEW 2: view_menu_nutrition

-- ============================================================

CREATE  OR  ALTER  VIEW view_menu_nutrition AS

SELECT

md.menu_date,

m.name  AS meal_name,

m.meal_time,

f.name  AS food_name,

f.category,

det.quantity_per_student,

f.unit,

n.name  AS nutrient_name,

ROUND(det.quantity_per_student * fn.amount_per_100g / 100, 2)  AS nutrient_amount,

n.unit AS nutrient_unit

FROM menu_days md

JOIN menu_details  det ON det.menu_day_id = md.id

JOIN meals  m ON m.id = det.meal_id

JOIN foods  f ON f.id = det.food_id

JOIN food_nutrients fn ON fn.food_id = f.id

JOIN nutrients  n ON n.id = fn.nutrient_id;

GO

**Mô tả**:

-   Hiển thị dinh dưỡng từng món trong thực đơn

**View 3: Trạng thái kho**

-- ============================================================

-- VIEW 3: view_inventory_status

-- ============================================================

CREATE  OR  ALTER  VIEW view_inventory_status AS

SELECT

i.id,

f.id AS food_id,

f.code AS food_code,

f.name  AS food_name,

f.category,

f.unit,

f.price_per_unit,

i.quantity AS current_quantity,

i.min_quantity,

i.max_quantity,

CASE

WHEN i.quantity <= 0 THEN  'out_of_stock'

WHEN i.quantity < i.min_quantity THEN  'low_stock'

WHEN i.quantity > i.max_quantity THEN  'overstock'

ELSE  'normal'

END  AS  status,

i.last_updated

FROM inventory i

JOIN foods f ON f.id = i.food_id

WHERE f.is_active = 1;

GO

**Mô tả**:

-   Phân loại:

-   thiếu
-   đủ
-   dư

**View 4: Tổng hợp mua hàng**

-- ============================================================

-- VIEW 4: view_shopping_summary

-- ============================================================

CREATE  OR  ALTER  VIEW view_shopping_summary AS

SELECT

sl.id,

md.menu_date,

f.name  AS food_name,

f.category,

f.unit,

f.price_per_unit,

sl.required_quantity,

sl.in_stock_quantity,

sl.need_to_buy,

sl.estimated_cost,

sl.status,

md.student_count

FROM shopping_list sl

JOIN menu_days md ON md.id = sl.menu_day_id

JOIN foods  f ON f.id = sl.food_id;

GO
```

**Mô tả**:

-   Tổng hợp danh sách cần mua
-   Ước tính chi phí

**3. Tóm tắt thiết kế dữ liệu**


*| Bảng | Thành phần | Chức năng chính |
| :--- | :--- | :--- |
| `users` | Quản lý người dùng | Đăng nhập, phân quyền hệ thống |
| `foods` | Dữ liệu nền | Quản lý danh mục thực phẩm |
| `nutrients` | Dữ liệu nền | Quản lý thông tin dinh dưỡng |
| `food_nutrients` | Tính toán | Liên kết thực phẩm và hàm lượng dinh dưỡng |
| `meals` | Dữ liệu nền | Phân loại các bữa ăn (Sáng, Trưa, Chiều, Tối) |
| `menu_days` | Nghiệp vụ | Thiết lập thực đơn theo từng ngày |
| `menu_details` | Nghiệp vụ | Quản lý chi tiết các món ăn trong thực đơn |
| `inventory` | Vận hành | Quản lý kho và tồn kho nguyên liệu |
| `shopping_list` | Vận hành | Tự động lập danh sách mua sắm nguyên liệu |
| `views` | Báo cáo | Cung cấp dữ liệu phân tích và thống kê |

# PHẦN IV: THIẾT KẾ API BACKEND

**1. Kiến trúc Backend (Monolithic)**

**Mô tả**: Backend được xây dựng theo mô hình **Monolithic (1 server duy nhất)** sử dụng **NodeJS + Express + SQL Server**, phù hợp với đồ án sinh viên, dễ triển khai và bảo trì.
```
┌─────────────────────────────────────┐  
│  Frontend (HTML/JS)  │  
│  (Bootstrap + Chart.js + AJAX)  │  
└─────────────────────────────────────┘  
│  
↓  
┌─────────────────────────────────────┐  
│  API Gateway / Authentication  │  
│  (JWT - Login System)  │  
└─────────────────────────────────────┘  
│  
┌────────┼────────┐  
↓  ↓  ↓  
┌──────────────────────────────────────┐  
│  API Routes / Endpoints  │  
├──────────────────────────────────────┤  
│ ├─ Auth API (Login/Register)  │  
│ ├─ Users API (Admin)  │  
│ ├─ Foods API  │  
│ ├─ Nutrients API  │  
│ ├─ Meals API  │  
│ ├─ Menu API  │  
│ ├─ Inventory API  │  
│ ├─ Shopping API  │  
│ └─ Reports API  │  
└──────────────────────────────────────┘  
│  
┌────────┼────────┐  
↓  ↓  ↓  
┌──────────────────────────────────────┐  
│  Business Logic Layer  │  
├──────────────────────────────────────┤  
│ ├─ Auth Service  │  
│ ├─ User Service  │  
│ ├─ Food Service  │  
│ ├─ Nutrition Service  │  
│ ├─ Menu Service  │  
│ ├─ Inventory Service  │  
│ ├─ Shopping Service  │  
│ └─ Report Service  │  
└──────────────────────────────────────┘  
│  
↓  
┌─────────────────────────────────────┐  
│  Database (SQL Server)  │  
│ (9 bảng + 4 VIEW báo cáo)  │  
└─────────────────────────────────────┘
```

# 2. Danh sách API Endpoints**

----------


## A. Authentication (Đăng nhập hệ thống)

| Method | Endpoint | Mô tả | Quyền truy cập |
| :--- | :--- | :--- | :--- |
| <kbd>POST</kbd> | `/api/auth/login` | Đăng nhập vào hệ thống và lấy Token | Công khai |
| <kbd>GET</kbd> | `/api/auth/me` | Lấy thông tin chi tiết người dùng hiện tại | Đã đăng nhập |

**B. Users Management (Admin)**

### B. Quản lý người dùng (Users Management)
| Method | Endpoint | Mô tả | Quyền |
| :--- | :--- | :--- | :--- |
| <kbd>GET</kbd> | `/api/users` | Lấy danh sách user | **ADMIN** |
| <kbd>GET</kbd> | `/api/users/{id}` | Chi tiết user | **ADMIN** |
| <kbd>POST</kbd> | `/api/users` | Tạo user | **ADMIN** |
| <kbd>PUT</kbd> | `/api/users/{id}` | Cập nhật user | **ADMIN** |
| <kbd>DELETE</kbd> | `/api/users/{id}` | Xóa user | **ADMIN** |

### C. Quản lý thực phẩm (Foods Management)
| Method | Endpoint | Mô tả | Quyền |
| :--- | :--- | :--- | :--- |
| <kbd>GET</kbd> | `/api/foods` | Lấy danh sách thực phẩm | **STAFF, ADMIN** |
| <kbd>GET</kbd> | `/api/foods/{id}` | Chi tiết thực phẩm | **STAFF, ADMIN** |
| <kbd>POST</kbd> | `/api/foods` | Thêm thực phẩm | **ADMIN** |
| <kbd>PUT</kbd> | `/api/foods/{id}` | Cập nhật thực phẩm | **ADMIN** |
| <kbd>DELETE</kbd> | `/api/foods/{id}` | Xóa thực phẩm | **ADMIN** |

### D. Dinh dưỡng (Nutrients Management)
| Method | Endpoint | Mô tả | Quyền |
| :--- | :--- | :--- | :--- |
| <kbd>GET</kbd> | `/api/nutrients` | Danh sách dinh dưỡng | **STAFF, ADMIN** |
| <kbd>POST</kbd> | `/api/nutrients` | Thêm chất dinh dưỡng | **ADMIN** |

### E. Food - Nutrient Mapping
| Method | Endpoint | Mô tả | Quyền |
| :--- | :--- | :--- | :--- |
| <kbd>GET</kbd> | `/api/foods/{id}/nutrients` | Xem dinh dưỡng của món | **STAFF** |
| <kbd>POST</kbd> | `/api/food-nutrients` | Gán dinh dưỡng cho thực phẩm | **ADMIN** |

### F. Bữa ăn (Meals)
| Method | Endpoint | Mô tả | Quyền |
| :--- | :--- | :--- | :--- |
| <kbd>GET</kbd> | `/api/meals` | Danh sách bữa ăn | Tất cả |
| <kbd>POST</kbd> | `/api/meals` | Thêm bữa ăn | **ADMIN** |

### G. Thực đơn (Menu Management)
| Method | Endpoint | Mô tả | Quyền |
| :--- | :--- | :--- | :--- |
| <kbd>GET</kbd> | `/api/menu-days` | Danh sách thực đơn | **STAFF, ADMIN** |
| <kbd>GET</kbd> | `/api/menu-days/{id}` | Chi tiết thực đơn | **STAFF** |
| <kbd>POST</kbd> | `/api/menu-days` | Tạo thực đơn | **NUTRITIONIST** |
| <kbd>PUT</kbd> | `/api/menu-days/{id}` | Cập nhật thực đơn | **NUTRITIONIST** |
| <kbd>DELETE</kbd> | `/api/menu-days/{id}` | Xóa thực đơn | **ADMIN** |

### H. Chi tiết món ăn (Menu Details)
| Method | Endpoint | Mô tả | Quyền |
| :--- | :--- | :--- | :--- |
| <kbd>POST</kbd> | `/api/menu-details` | Thêm món vào thực đơn | **NUTRITIONIST** |
| <kbd>PUT</kbd> | `/api/menu-details/{id}` | Cập nhật món | **NUTRITIONIST** |
| <kbd>DELETE</kbd> | `/api/menu-details/{id}` | Xóa món | **ADMIN** |

### I. Kho thực phẩm (Inventory)
| Method | Endpoint | Mô tả | Quyền |
| :--- | :--- | :--- | :--- |
| <kbd>GET</kbd> | `/api/inventory` | Xem tồn kho | **STAFF** |
| <kbd>PUT</kbd> | `/api/inventory/{food_id}` | Cập nhật số lượng | **STAFF** |

### J. Danh sách mua (Shopping List)
| Method | Endpoint | Mô tả | Quyền |
| :--- | :--- | :--- | :--- |
| <kbd>GET</kbd> | `/api/shopping` | Danh sách cần mua | **STAFF** |
| <kbd>POST</kbd> | `/api/shopping/estimate` | Tính toán nguyên liệu | **STAFF** |
| <kbd>PUT</kbd> | `/api/shopping/{id}` | Cập nhật trạng thái | **STAFF** |

### K. Báo cáo hệ thống (Reports)
| Method | Endpoint | Mô tả | Quyền |
| :--- | :--- | :--- | :--- |
| <kbd>GET</kbd> | `/api/reports/nutrition` | Tổng dinh dưỡng | **NUTRITIONIST** |
| <kbd>GET</kbd> | `/api/reports/menu` | Chi tiết dinh dưỡng menu | **NUTRITIONIST** |
| <kbd>GET</kbd> | `/api/reports/inventory` | Trạng thái kho | **ADMIN** |


**3. Cấu trúc Request/Response mẫu (THEO CODE THỰC TẾ)**

**Ví dụ 1: Tạo thực đơn (POST /api/menu)**

(tương ứng menuRoutes.js + menuController.js)

**Request Body**
```sql

{  
"menu_date": "2026-03-20",  
"note": "Thực đơn tuần 3"  
}

**Response Success (200)**

{  
"message": "Menu created"  
}

**Giải thích theo code:**

-   Không có success
-   Không trả data
-   Chỉ trả { message: "Menu created" }

**Ví dụ 2: Lấy danh sách thực đơn (GET /api/menu)**

**Response Success (200)**
```sql

[  
{  
"menu_id": 1,  
"menu_date": "2026-03-20",  
"note": "Thực đơn tuần 3"  
},  
{  
"menu_id": 2,  
"menu_date": "2026-03-21",  
"note": "Thực đơn tuần 3"  
}  
]
```sql
# Theo code:

res.json(result.recordset);

→ Trả về **array trực tiếp**, KHÔNG bọc object

**Ví dụ 3: Kiểm tra dinh dưỡng (GET /api/nutrition-check)**

_(từ_ _nutritionCheckRoutes.js)_

**Response Success (200)**

[  
{  
"menu_date": "2026-03-20",  
"nutrient": "Protein",  
"total_amount": 25000,  
"recommended": 30000,  
"status": "THIEU"  
},  
{  
"menu_date": "2026-03-20",  
"nutrient": "Calories",  
"total_amount": 120000,  
"recommended": 110000,  
"status": "DU"  
}  
]

**Ví dụ 4: Cập nhật tồn kho (PUT /api/inventory/:id)**

**Request Body**

{  
"quantity": 50  
}

**Response Success (200)**

{  
"message": "Inventory updated"  
}

**Ví dụ 5: Tạo danh sách mua hàng (POST /api/purchase)**

**Request Body**

{  
"menu_date": "2026-03-20"  
}

**Response Success (200)**

{  
"message": "Purchase list created"  
}
```
# PHẦN V: PHÂN CÔNG NHIỆM VỤ SINH VIÊN**


### 1. Thống kê quy mô nhóm
| Yếu tố | Chi tiết |
| :--- | :--- |
| **Tổng số thành viên** | 03 Sinh viên |
| **Tổng số bảng (Database)** | 09 Bảng dữ liệu |
| **Tổng số API Endpoints** | ~25 Endpoints |
| **Ngôn ngữ lập trình** | Node.js (Express Framework) |
| **Cơ sở dữ liệu** | MySQL |

---

### 2. Bảng phân công chi tiết

#### 👤 SV1: Foods + Nutrients (Quản lý dữ liệu nền)
**Nhiệm vụ chính:** Xây dựng các chức năng CRUD cơ bản cho danh mục thực phẩm và dinh dưỡng.

**Các bảng dữ liệu phụ trách:**
1. `foods`: Danh mục thực phẩm.
2. `nutrients`: Danh mục chất dinh dưỡng.
3. `food_nutrients`: Bảng liên kết (Mapping) giữa thực phẩm và dinh dưỡng.

**API Endpoints:**

-   GET /api/foods
-   GET /api/foods/:id
-   POST /api/foods
-   PUT /api/foods/:id
-   DELETE /api/foods/:id
-   GET /api/nutrients
-   POST /api/nutrients
-   GET /api/foods/:id/nutrients
-   POST /api/food-nutrients

**Yêu cầu:**

-   CRUD cơ bản
-   Validate input
-   Join dữ liệu Food ↔ Nutrient
-   Trả dữ liệu đúng format backend hiện tại

**SV2: Menu + Logic dinh dưỡng (CORE)**

**Bảng dữ liệu:**

1.  **Menu**
2.  **Menu_Details**

**API Endpoints:**

-   GET /api/menu
-   POST /api/menu
-   DELETE /api/menu/:id
-   POST /api/menu-details
-   DELETE /api/menu-details/:id
-   GET /api/nutrition-check

**Yêu cầu (quan trọng):**

-   Xây dựng thực đơn
-   Gán món ăn vào thực đơn
-   **Tính toán dinh dưỡng (logic chính)**:

-   Tổng protein, calories
-   So sánh với recommended

-   Query từ VIEW
-   Xử lý logic backend

**SV3: Inventory + Purchase + Reports**

**Bảng dữ liệu:**

1.  **Inventory**
2.  **Purchase_List**
3.  **Reports (VIEW)**

**API Endpoints:**

-   GET /api/inventory
-   PUT /api/inventory/:id
-   GET /api/purchase
-   POST /api/purchase
-   GET /api/reports

**Yêu cầu (quan trọng):**

-   Quản lý tồn kho
-   Tính toán nguyên liệu cần mua
-   **Logic mua hàng:**

-   Required = menu × số học sinh
-   So sánh tồn kho

-   Báo cáo tổng hợp


# PHẦN VI: LOGIC NGHIỆP VỤ CHÍNH (THEO PROJECT)

**1. Tính dinh dưỡng thực đơn**

**Mô tả**

Ví dụ:

-   1 học sinh ăn:

-   150g thịt gà
-   100g rau

→ Tính tổng protein, calories

**Thuật toán**
```sql

for  each  food  in menu:

nutrient_value = quantity_per_student × amount_per_100g / 100

total += nutrient_value

compare  total  with  recommended

**SQL sử dụng (VIEW)**

SELECT

m.menu_date,

n.name  AS nutrient,

SUM(md.quantity_per_student * fn.amount_per_100g / 100)  AS total_amount

FROM Menu m

JOIN Menu_Details md ON m.menu_id = md.menu_id

JOIN Food_Nutrients fn ON md.food_id = fn.food_id

JOIN Nutrients n ON fn.nutrient_id = n.nutrient_id

GROUP  BY m.menu_date, n.name;

**2. Logic tính danh sách mua hang**

**Mô tả**

-   500 học sinh
-   1 món cần 150g/người

→ Tổng cần:

150g × 500 = 75kg

**Thuật toán**

required = quantity_per_student × number_of_students

if  required > inventory:

need_to_buy = required - inventory

else:

need_to_buy = 0

**3. Logic kiểm soát tồn kho**

if  quantity < min:

status = "THIẾU"

else  if  quantity > max:

status = "DƯ"

else:

status = "BÌNH THƯỜNG"
```

# PHẦN VII: YÊU CẦU KỸ THUẬT & MÔI TRƯỜNG

**1. Stack công nghệ**

### 3. Thông số kỹ thuật (Technical Specifications)


| Lớp (Layer) | Công nghệ sử dụng | Phiên bản (Version) |
| :--- | :--- | :--- |
| **Backend** | Node.js + Express | `v18.x` hoặc mới hơn |
| **Database** | SQL Server (MSSQL) | `2019` hoặc mới hơn |
| **Authentication** | Basic / Token-based | *Đang cập nhật* |
| **Unit Testing** | N/A | *Chưa triển khai* |
| **API Testing** | Postman | Phiên bản mới nhất |
| **Version Control** | Git | Github / GitLab |
**2. Cấu trúc thư mục (THEO FILE BACKEND)**


**3. Yêu cầu môi trường**

**Máy cá nhân**

-   Node.js >= 18
-   SQL Server
-   VS Code
-   Postman

**4. Nhận xét hệ thống**

**Ưu điểm:**

-   Dễ triển khai (monolithic)
-   Code đơn giản, dễ hiểu
-   Phù hợp đồ án sinh viên

**Hạn chế:**

-   Chưa chuẩn RESTful response
-   Chưa có authentication
-   Chưa có validation
-   Chưa có error handling chuẩn

# PHẦN VIII: YÊU CẦU CHI TIẾT CHO TỪNG SINH VIÊN (ĐÃ SỬA ĐÚNG ĐỀ)

**1. Yêu cầu chung (Tất cả SV)**

**Về Code**

-   Viết code sạch, readable (camelCase, indentation chuẩn)
-   Sử dụng Git (commit message rõ ràng)
-   Function nhỏ, rõ nhiệm vụ (Single Responsibility)
-   Xử lý lỗi (try-catch, error response chuẩn)
-   Validate input đầy đủ

**Về Cơ sở dữ liệu**

-   Thiết kế chuẩn hóa (>= 3NF)
-   Đặt tên cột snake_case
-   Có Primary Key, Foreign Key
-   Tạo index cho:

-   food_id
-   menu_id

-   Viết SQL chính xác

**Về API**

-   CRUD đầy đủ
-   Response chuẩn:

{  
"success": true,  
"message": "string",  
"data": {},  
"error": null  
}

-   HTTP code đúng (200, 201, 400, 404, 500)
-   Validate request

**Về Testing**

-   Unit test logic
-   Integration test API
-   Coverage ≥ 70%
-   Test error cases

**Về Tài liệu**

-   README.md
-   Swagger API docs
-   Comment code
-   Postman collection

**2. Yêu cầu cho Đinh** **Quang Minh** **(Foods + Nutrients)**

**Database**

-   Bảng foods

-   id, name, category, unit, created_at

-   Bảng nutrients

-   id, name (protein, calories, lipid)

-   Bảng food_nutrients

-   food_id, nutrient_id, amount_per_100g

**API**

**Foods**

-   GET /api/v1/foods
-   GET /api/v1/foods/:id
-   POST /api/v1/foods

-   Validate name (required)

-   PUT /api/v1/foods/:id
-   DELETE /api/v1/foods/:id

**Nutrients**

-   GET /api/v1/nutrients
-   POST /api/v1/nutrients

**Food Nutrients**

-   GET /api/v1/foods/:id/nutrients
-   POST /api/v1/food-nutrients

**Testing**

-   Unit test validate input
-   Integration test CRUD
-   ≥ 10 API test

**Deliverables**

-   Code
-   SQL schema
-   Swagger
-   Postman

**3. Yêu cầu cho Phạm** **Đức Mạnh** **(CORE – Menu + Nutrition)**

**Database**

-   menu
-   menu_details

-   menu_id, food_id, quantity_per_student

**API**

**Menu**

-   GET /api/v1/menu
-   POST /api/v1/menu
-   DELETE /api/v1/menu/:id

**Menu Details**

-   POST /api/v1/menu-details
-   DELETE /api/v1/menu-details/:id

**Logic chính: TÍNH DINH DƯỠNG**

**Yêu cầu**

-   Tính:

-   Calories
-   Protein
-   Lipid

-   Tổng theo menu
-   So sánh với recommended

**Thuật toán**

for each food in menu:  
nutrient = quantity_per_student * amount_per_100g / 100  
total += nutrient

**API**

-   GET /api/v1/nutrition-check

-   Trả:

-   total calories
-   protein
-   lipid
-   status (OK / thiếu)

**Logic quan trọng 2: DỰ TRÙ THỰC PHẨM**

**Mô tả**

-   500 học sinh
-   1 món cần 150g

**Thuật toán**

required = quantity_per_student * number_of_students

**API**

-   GET /api/v1/purchase-plan

-   Trả:

-   tổng kg cần mua
-   từng nguyên liệu

**Testing**

-   ≥ 10 test dinh dưỡng
-   Test edge cases (0g, số lẻ)
-   Integration test menu → nutrition

**Deliverables**

-   Code
-   SQL
-   Swagger
-   Test ≥ 70%

**4. Yêu cầu cho SV3 (Inventory + Reports)**

**Database**

-   inventory
-   purchase_list
-   VIEW nutrition_report

**API**

**Inventory**

-   GET /api/v1/inventory
-   PUT /api/v1/inventory/:id

**Purchase**

-   GET /api/v1/purchase
-   POST /api/v1/purchase

**Report chính**

**1. Báo cáo dinh dưỡng**

-   GET /api/v1/reports/nutrition
-   Tổng calories, protein, lipid theo ngày

**2. Báo cáo nguyên liệu**

-   GET /api/v1/reports/ingredients
-   Tổng số kg cần mua

**3. Báo cáo tồn kho**

-   GET /api/v1/reports/inventory
-   Thiếu / đủ / dư

**Logic tồn kho**

if stock < required:  
status = "THIẾU"

**Testing**

-   ≥ 8 test report
-   Test data lớn
-   Test filter

**Deliverables**

-   Code
-   SQL + VIEW
-   Test data
-   Docs

# PHẦN IX: TIÊU CHUẨN ĐÁNH GIÁ 

### 1. Rubric đánh giá tổng thể
```

| Tiêu chí | Trọng số (%) | Chi tiết yêu cầu |
| :--- | :---: | :--- |
| **Database Design** | 15% | Thiết kế 9 bảng + 4 view, khóa ngoại đầy đủ, chuẩn hóa dữ liệu |
| **API Implementation** | 25% | CRUD đầy đủ (users, foods, menu, inventory…), validate & error handling |
| **Business Logic** | 20% | Tính toán dinh dưỡng, tạo thực đơn, tính chi phí mua hàng |
| **Code Quality** | 15% | Code rõ ràng, tách biệt Controller/Service, đặt tên chuẩn |
| **Testing & Documentation** | 15% | Test API bằng Postman, README hoàn thiện, mô tả API chi tiết |
| **Presentation & Report** | 10% | Báo cáo, slide thuyết trình và demo hệ thống thực tế |

---

### 2. Rubric chi tiết từng thành viên

#### 👤 Đinh Quang Minh: Quản lý dữ liệu & API
**Vai trò:** Database + CRUD + Hệ thống chính


| Hạng mục đánh giá | Trọng số | Chỉ số hoàn thành (KPIs) |
| :--- | :---: | :--- |
| **Database Design** | 20% | Thiết kế 09 bảng dữ liệu; Quan hệ khóa ngoại chính xác |
| **API CRUD** | 30% | Xây dựng 15–20 endpoints cho: Users, Foods, Meals, Menu... |
| **Validation** | 15% | Kiểm tra dữ liệu đầu vào; Xử lý lỗi chuẩn (400, 404, 500) |
| **Testing** | 15% | Kiểm thử toàn bộ chức năng CRUD bằng Postman |
| **Documentation** | 20% | README chi tiết, danh sách API rõ ràng, comment code đầy đủ |

#### 👤 Phạm Đức Mạnh: Logic nghiệp vụ & Báo cáo
**Vai trò:** Tính toán dinh dưỡng + View + Logic hệ thống

| Hạng mục đánh giá | Trọng số | Chỉ số hoàn thành (KPIs) |
| :--- | :---: | :--- |
| **Database Design** | 15% | Xây dựng & sử dụng 4 VIEW báo cáo (Nutrition, Inventory, Shopping) |
| **API Implementation** | 20% | Triển khai ~15 endpoints về tính toán và báo cáo |
| **Business Logic** | 30% | Tính dinh dưỡng, so sánh khuyến nghị, tính mua hàng & chi phí |
| **Testing** | 15% | Test logic tính toán, dữ liệu thực tế và các trường hợp biên (Edge cases) |
| **Documentation** | 20% | Giải thích công thức, mô tả logic view và ví dụ minh họa |

---

### 📝 Công thức logic nghiệp vụ áp dụng:

1. **Tính dinh dưỡng:** $$nutrient = quantity\_per\_student \times \frac{amount\_per\_100g}{100}$$
2. **Tính lượng cần mua:** $$need\_to\_buy = required\_amount - current\_inventory$$
3. **Tính chi phí dự kiến:** $$estimated\_cost = need\_to\_buy \times unit\_price$$

```
# PHẦN X: LỊCH TRÌNH


### 4. Kế hoạch thực hiện (Project Roadmap)

| Tuần | Mốc quan trọng | Chi tiết yêu cầu |
| :--- | :--- | :--- |
| **1** | **Xây dựng môi trường & Database** | Hoàn thiện cấu trúc Database (09 bảng + 04 views), thiết lập kết nối SQL Server. |
| **2** | **Đinh Quang Minh: Phát triển API** | Hoàn thành hệ thống CRUD API cho: `users`, `foods`, `meals`, `menu_days`, `menu_details`. |
| **3** | **Phạm Đức Mạnh: Logic nghiệp vụ** | Triển khai logic tính toán dinh dưỡng, xây dựng các views báo cáo (nutrition, inventory, shopping). |
| **4** | **Tích hợp hệ thống** | Tích hợp hoàn chỉnh API với các nghiệp vụ phức tạp: Quản lý thực đơn, tồn kho và danh sách mua sắm. |
| **5** | **Kiểm thử (Testing)** | Kiểm thử toàn diện hệ thống bằng Postman, xử lý lỗi (Fix bugs) và tối ưu hóa hiệu suất. |
| **5 - 6** | **Tổng kết & Hoàn thiện** | Hoàn thiện file README, viết báo cáo chi tiết, chuẩn bị Slide và Demo hệ thống. |

# KẾT LUẬN

**Đề tài:**

**Xây dựng Backend Quản lý Thực đơn & Dinh dưỡng Bếp ăn Bán trú**

**Ưu điểm:**

-   Đúng yêu cầu đề bài
-   Có business logic thực tế
-   Phân công rõ ràng
-   Có thể mở rộng

**Hướng phát triển:**

-   Thêm AI gợi ý thực đơn
-   Dashboard (React)
-   Deploy cloud

Top of Form

Bottom of Form

Bottom of Form

# TÀI LIỆU THAM KHẢO

[1] Alan Beaulieu, “Learning SQL: Generate, Manipulate, and Retrieve Data”, O’Reilly Media, 2020

[2] Adam Freeman, “Pro ASP.NET Core 7”, Manning, 2023.

[3] Mark J. Price, “C# 13 and .NET 9 Modern Cross-Platform Development Fundamentals: Start building websites and services with ASP.NET Core 9, Blazor, and EF Core 9”, Packt Publishing, 2024.

[4] RB Whitaker, “The C# Player’s Guide”, RB Whitaker, 2022.
