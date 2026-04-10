import { Search, ShoppingCart, Bell, UserCircle2, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [query, setQuery] = useState('')

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 lg:px-8">
        <button className="rounded-2xl p-2 hover:bg-slate-100 lg:hidden">
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 text-xl font-black text-white shadow-lg shadow-orange-200">
            T
          </div>
          <div>
            <div className="text-lg font-black tracking-tight">Technable</div>
            <div className="text-xs text-slate-500">Mua sắm nhanh, đẹp, tiện</div>
          </div>
        </div>

        <div className="hidden flex-1 lg:block">
          <div className="flex items-center rounded-2xl bg-slate-100 px-4 py-3">
            <Search className="mr-3 h-5 w-5 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm sản phẩm, thương hiệu và danh mục"
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button className="rounded-2xl p-2 hover:bg-slate-100">
            <Bell className="h-5 w-5 text-slate-700" />
          </button>
          <button className="rounded-2xl p-2 hover:bg-slate-100">
            <ShoppingCart className="h-5 w-5 text-slate-700" />
          </button>
          <button className="flex items-center gap-2 rounded-2xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-200 hover:bg-orange-600">
            <UserCircle2 className="h-4 w-4" />
            Log in
          </button>
        </div>
      </div>

      <div className="border-t border-slate-200 px-4 py-3 lg:hidden">
        <div className="flex items-center rounded-2xl bg-slate-100 px-4 py-3">
          <Search className="mr-3 h-5 w-5 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm sản phẩm..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>
      </div>
    </header>
  )
}