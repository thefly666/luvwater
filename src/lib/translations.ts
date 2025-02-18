export type Language = 'en' | 'vi';

export const translations = {
  en: {
    title: 'Transform the Way You Hydrate.',
    description: 'Water just got exciting. LuvWater combines hydration with powerful health benefits, offering a range of all-natural, water-soluble products that support everything from immunity to beauty. Sign up now for a free sample and experience the future of hydration today.',
    chooseSample: 'Choose Your Sample:',
    immunitySupport: 'Immunity Support',
    immunityDescription: 'Boost your immune system naturally',
    essentialVitamins: 'Essential Vitamins',
    vitaminsDescription: 'Complete daily vitamin boost',
    emailPlaceholder: 'Enter your email for a free sample',
    getSample: 'Get Sample Now',
    processing: 'Processing...',
    success: 'Thank you! Your free sample is on the way!',
    alreadySubscribed: 'This email is already subscribed!',
    error: 'An error occurred. Please try again.'
  },
  vi: {
    title: 'Thay Đổi Cách Bạn Uống Nước.',
    description: 'Nước uống giờ đây thật thú vị. LuvWater kết hợp việc cung cấp nước với các lợi ích sức khỏe mạnh mẽ, cung cấp một loạt các sản phẩm hòa tan trong nước hoàn toàn tự nhiên, hỗ trợ từ miễn dịch đến làm đẹp. Đăng ký ngay để nhận mẫu thử miễn phí và trải nghiệm tương lai của việc cung cấp nước ngay hôm nay.',
    chooseSample: 'Chọn Mẫu Thử Của Bạn:',
    immunitySupport: 'Hỗ Trợ Miễn Dịch',
    immunityDescription: 'Tăng cường hệ miễn dịch tự nhiên',
    essentialVitamins: 'Vitamin Thiết Yếu',
    vitaminsDescription: 'Bổ sung vitamin hàng ngày đầy đủ',
    emailPlaceholder: 'Nhập email của bạn để nhận mẫu thử miễn phí',
    getSample: 'Nhận Mẫu Thử Ngay',
    processing: 'Đang xử lý...',
    success: 'Cảm ơn bạn! Mẫu thử miễn phí của bạn đang trên đường gửi đến!',
    alreadySubscribed: 'Email này đã được đăng ký!',
    error: 'Đã xảy ra lỗi. Vui lòng thử lại.'
  }
} as const;