import { ShoppingCart, Star } from 'lucide-react'

const products = [
  { id: 1, title: 'Sneaker street style', price: '399.000đ', tag: 'Free ship', Image: '/images/ban-phim-co-mini.png', category:'Điện thoại' },
  { id: 2, title: 'Túi tote canvas', price: '129.000đ', tag: 'Giảm 30%', Image: '/images/tui-tote-canvas.png', category:'Thời trang' },
  { id: 3, title: 'Đèn bàn LED', price: '299.000đ', tag: 'Bán chạy', Image: '/images/den-ban-led.png', category:'Đồ gia dụng' },
  { id: 4, title: 'Bàn phím cơ mini', price: '459.000đ', tag: 'Mall', Image: '/images/ban-phim-co-mini.png', category:'Điện tử' },
  { id: 5, title: 'Set skincare cơ bản', price: '349.000đ', tag: 'Beauty', Image: '/images/set-skincare-co-ban.png', category:'Làm đẹp' },
  { id: 6, title: 'Loa mini di động', price: '279.000đ', tag: 'Hot', Image: '/images/loa-mini-di-dong.png', category:'Âm thanh' },
]

type Props = {
  selectedCategory: string
}

export default function ProductGrid({ selectedCategory }: Props) {
  const filteredProducts =
    selectedCategory === 'Tất cả'
      ? products
      : products.filter((item) => item.category === selectedCategory)

  return (
    <section className="mt-10">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Sản phẩm đề xuất</h2>
        <p className="text-sm text-slate-500">
          {selectedCategory === 'Tất cả'
            ? 'Dựa trên xu hướng mua sắm'
            : `Đang xem: ${selectedCategory}`}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[1/1] overflow-hidden">
              <img
                src={item.Image}
                alt={item.title}
                className="h-full w-full object-cover transition group-hover:scale-105"
              />
              <div className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                {item.tag}
              </div>
            </div>

            <div className="p-4">
              <div className="min-h-[3rem] text-sm font-medium text-slate-800">{item.title}</div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold text-orange-600">{item.price}</span>
                <div className="flex items-center gap-1 text-sm text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  4.9
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="mt-6 rounded-2xl bg-white p-6 text-center text-slate-500 shadow-sm ring-1 ring-slate-200">
          Không có sản phẩm nào trong danh mục này.
        </div>
      )}
    </section>
  )
}