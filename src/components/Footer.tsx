export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="text-xl font-black text-slate-900">Technable</div>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            Website mẫu thương mại điện tử hiện đại, tối ưu cho landing page và có thể mở rộng thành full stack.
          </p>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-wide text-slate-900">Liên kết</div>
          <div className="mt-3 grid gap-2 text-sm text-slate-500">
            <a href="#" className="hover:text-orange-600">Trang chủ</a>
            <a href="#" className="hover:text-orange-600">Danh mục</a>
            <a href="#" className="hover:text-orange-600">Flash sale</a>
          </div>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-wide text-slate-900">Hỗ trợ</div>
          <div className="mt-3 grid gap-2 text-sm text-slate-500">
            <a href="#" className="hover:text-orange-600">Trung tâm trợ giúp</a>
            <a href="#" className="hover:text-orange-600">Chính sách bảo mật</a>
            <a href="#" className="hover:text-orange-600">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  )
}