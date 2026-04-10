import { Star } from 'lucide-react'

const flashDeals = [
  { id: 1, name: 'Tai nghe Bluetooth X1', price: '249.000đ', oldPrice: '499.000đ', sold: 78, rating: 4.9 },
  { id: 2, name: 'Áo khoác unisex basic', price: '189.000đ', oldPrice: '329.000đ', sold: 61, rating: 4.8 },
  { id: 3, name: 'Bình giữ nhiệt 1L', price: '159.000đ', oldPrice: '279.000đ', sold: 89, rating: 5.0 },
  { id: 4, name: 'Sạc nhanh 45W', price: '219.000đ', oldPrice: '399.000đ', sold: 54, rating: 4.7 },
]

export default function FlashSale() {
  return (
    <section className="mt-10">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">Flash Sale</h2>
          <p className="text-sm text-slate-500">Ưu đãi giới hạn số lượng</p>
        </div>
        <div className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
          Kết thúc sau 02:15:36
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {flashDeals.map((item) => (
          <div key={item.id} className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="mb-4 aspect-[1.25/1] rounded-3xl bg-gradient-to-br from-orange-100 to-pink-100" />
            <div className="text-sm font-semibold text-slate-900">{item.name}</div>
            <div className="mt-2 flex items-end gap-2">
              <div className="text-xl font-black text-orange-600">{item.price}</div>
              <div className="pb-0.5 text-sm text-slate-400 line-through">{item.oldPrice}</div>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                {item.rating}
              </div>
              <div>{item.sold}% đã bán</div>
            </div>
            <div className="mt-3 h-2 rounded-full bg-slate-100">
              <div className="h-2 rounded-full bg-orange-500" style={{ width: `${item.sold}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}