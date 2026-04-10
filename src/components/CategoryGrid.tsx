import {
  Smartphone,
  Package,
  Heart,
  Truck,
  ShieldCheck,
  BadgePercent,
  Flame,
  ShoppingCart,
  Key,
  Keyboard,
  Mouse,
  Speaker,
  Computer,
} from 'lucide-react'

const categories = [
  { name: 'Điện thoại', icon: Smartphone },
  { name: 'Bàn phím', icon: Keyboard },
  { name: 'Chuột', icon: Mouse },
  { name: 'Loa', icon: Speaker },
  { name: 'Pad chuột', icon: Package },
  { name: 'linh kiện máy tính', icon: Computer },
  { name: 'Phụ kiện', icon: Heart },
  { name: 'Voucher', icon: BadgePercent },
  { name: 'Nổi bật', icon: Flame },
]

type Props = {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export default function CategoryGrid({ selectedCategory, onSelectCategory }: Props) {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">Danh mục nổi bật</h2>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        <button
          onClick={() => onSelectCategory('Tất cả')}
          className={`rounded-2xl p-4 text-left shadow-sm ring-1 transition ${
            selectedCategory === 'Tất cả'
              ? 'bg-orange-500 text-white ring-orange-500'
              : 'bg-white ring-slate-200 hover:-translate-y-0.5'
          }`}
        >
          <div className="text-sm font-semibold">Tất cả</div>
          <div className={`mt-2 text-xs ${selectedCategory === 'Tất cả' ? 'text-white/80' : 'text-slate-500'}`}>
            Xem toàn bộ
          </div>
        </button>

        {categories.map((item) => {
          const Icon = item.icon
          const active = selectedCategory === item.name

          return (
            <button
              key={item.name}
              onClick={() => onSelectCategory(item.name)}
              className={`rounded-2xl p-4 text-left shadow-sm ring-1 transition ${
                active
                  ? 'bg-orange-500 text-white ring-orange-500'
                  : 'bg-white ring-slate-200 hover:-translate-y-0.5'
              }`}
            >
              <Icon className={`h-5 w-5 ${active ? 'text-white' : 'text-orange-500'}`} />
              <div className="mt-2 text-sm font-semibold">{item.name}</div>
            </button>
          )
        })}
      </div>
    </section>
  )
}