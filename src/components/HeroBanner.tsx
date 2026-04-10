export default function HeroBanner() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-500 via-rose-500 to-pink-600 p-6 shadow-2xl shadow-orange-200 lg:p-10">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-20 right-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

        <div className="relative max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            Flash sale hôm nay
          </div>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Shoppeeee — mua sắm mọi thứ trong một chạm
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-white/90">
            Giao diện thương mại điện tử hiện đại với banner, danh mục, flash sale và sản phẩm nổi bật.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg">
              Mua ngay
            </button>
            <button className="rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm">
              Xem ưu đãi
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-lg">
            <Stat label="Sản phẩm" value="10k+" />
            <Stat label="Đơn/ngày" value="2.4k" />
            <Stat label="Khách hàng" value="98%" />
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <InfoCard title="Đăng nhập nhận voucher" subtitle="Mã SHOP20 giảm 20%" />
        <div className="grid grid-cols-2 gap-4">
          <SmallCard title="Giao nhanh" subtitle="Trong 24h nội thành" />
          <SmallCard title="Thanh toán" subtitle="Đa dạng & an toàn" />
        </div>
        <InfoCard title="Hà Nội, Việt Nam" subtitle="Thay đổi khu vực" />
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-white/75">{label}</div>
    </div>
  )
}

function InfoCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <div className="text-sm font-medium text-slate-500">Hỗ trợ</div>
      <div className="mt-1 text-xl font-bold text-slate-900">{title}</div>
      <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">{subtitle}</div>
    </div>
  )
}

function SmallCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <div className="mt-3 text-sm font-semibold text-slate-900">{title}</div>
      <div className="text-sm text-slate-500">{subtitle}</div>
    </div>
  )
}