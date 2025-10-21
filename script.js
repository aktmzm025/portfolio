// ==================== 
// 프로젝트 데이터
// ====================

const projectsData = {
    'riverdice': {
        title: '🎮 리버다이스 게임 홈페이지',
        team: '팀 프로젝트',
        role: '풀스택 개발',
        duration: '2025.08 - 2025.10',
        tech: ['Java', 'JavaScript', 'React', 'MySQL', 'API', 'JSON'],
        github: 'https://github.com/aktmzm025/riverdice',
        description: '리버다이스라는 개발한 웹페이지 게임을 연동하는 게임 서버와 다른 서버를 이용하며 사용자의 편의성을 제공하기 위한 홈페이지를 기획 및 제작했습니다.',
        features: [
            {
                title: '회원 관리 시스템',
                items: [
                    '아이디/비밀번호 기반 회원가입 및 로그인',
                    '비밀번호 암호화 저장 (해시 처리)으로 보안 강화',
                    '회원정보 조회 및 관리 기능'
                ]
            },
            {
                title: '공지사항 시스템',
                items: [
                    '카테고리별 공지사항 분류 및 정렬',
                    '상세 보기 기능으로 내용 확인',
                    '관리자 페이지에서 CRUD 가능'
                ]
            },
            {
                title: '커뮤니티 게시판',
                items: [
                    '6개 카테고리별 게시글 분류',
                    '글쓰기 모달 UI 구현',
                    '좋아요 기능 및 댓글 작성/조회',
                    '작성 시간 자동 표시'
                ]
            },
            {
                title: '미디어 페이지',
                items: [
                    '이미지 및 동영상 업로드',
                    'YouTube URL 자동 Vimeo 변환 처리',
                    '페이지 내 미리보기 (클릭 없이 재생)',
                    '원본 URL 복구 기능',
                    '내 미디어 편집 및 삭제'
                ]
            },
            {
                title: '고객센터',
                items: [
                    '아코디언 UI로 가독성 향상',
                    '유효성 검사 및 폼 자동완성',
                    '문의 유형별 내용 자동 작성'
                ]
            },
            {
                title: '관리자 페이지',
                items: [
                    '8개 카테고리 데이터 관리',
                    '실시간 대시보드 (데이터 증가 현황)',
                    '모든 데이터 수정/삭제 권한',
                    '공지사항 작성 및 업데이트'
                ]
            }
        ],
        technical: [
            '프론트엔드와 백엔드 분리 아키텍처',
            '로컬 서버 구축으로 독립적 운영',
            'API 기반 데이터 통신',
            '코드 모듈화 및 라이브러리화',
            'YouTube URL → Vimeo 자동 변환 알고리즘'
        ],
        coreCode: [
            {
                category: '인증 & 보안',
                title: 'localStorage 멀티탭 동기화',
                reason: '여러 탭에서 로그인 상태를 실시간으로 동기화하여 일관된 사용자 경험 제공',
                code: `window.addEventListener('storage', function(e) {
    if (e.key === 'currentUser') {
        updateAuthButtons();
    }
});`
            },
            {
                category: '인증 & 보안',
                title: 'XSS 방어 (HTML Escaping)',
                reason: '사용자 입력값을 안전하게 처리하여 악의적인 스크립트 실행 방지',
                code: `function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}`
            },
            {
                category: 'UI/UX 최적화',
                title: '무한 스크롤',
                reason: '페이지 새로고침 없이 콘텐츠를 자동으로 로드하여 사용자 편의성 향상',
                code: `handleScroll() {
    if (this.isLoading || !this.hasMoreItems) return;
    
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (scrollTop + windowHeight >= documentHeight - 1000) {
        this.currentPage++;
        this.loadMoreItems();
    }
}`
            },
            {
                category: 'UI/UX 최적화',
                title: 'Debouncing 패턴',
                reason: '불필요한 API 호출을 줄여 서버 부하 감소 및 성능 최적화',
                code: `static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}`
            },
            {
                category: 'UI/UX 최적화',
                title: '낙관적 UI 업데이트',
                reason: '서버 응답 전에 UI를 먼저 업데이트하여 즉각적인 피드백 제공',
                code: `async function toggleLike() {
    // 즉시 UI 업데이트
    likeIcon.textContent = '💖';
    likeCountSpan.textContent = parseInt(likeCountSpan.textContent) + 1;
    
    try {
        const response = await fetch(\`/api/posts/\${postId}/like\`, {
            method: 'POST'
        });
        // 서버 응답으로 보정
    } catch (error) {
        // 실패 시 롤백
        likeIcon.textContent = '❤️';
        likeCountSpan.textContent = parseInt(likeCountSpan.textContent) - 1;
    }
}`
            },
            {
                category: '파일 처리',
                title: 'YouTube URL 파싱 및 Vimeo 변환',
                reason: '다양한 형식의 YouTube URL을 자동으로 감지하고 임베드 가능한 형식으로 변환',
                code: `extractYouTubeId(url) {
    const regex = /(?:youtube\\.com\\/(?:[^\\/]+\\/.+\\/|(?:v|e(?:mbed)?)\\/|.*[?&]v=)|youtu\\.be\\/)([^"&?\\/\\s]{11})/i;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function convertYouTubeUrl(url) {
    const videoId = extractYouTubeId(url);
    return videoId ? \`https://www.youtube.com/embed/\${videoId}\` : null;
}`
            },
            {
                category: '파일 처리',
                title: 'Drag & Drop 파일 업로드',
                reason: '직관적인 드래그앤드롭으로 사용자가 쉽게 파일을 업로드할 수 있도록 구현',
                code: `fileDropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        this.handleFileSelect(files[0]);
    }
});

fileDropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileDropZone.style.borderColor = '#667eea';
});`
            },
            {
                category: '상태 관리',
                title: '클래스 기반 상태 관리',
                reason: '복잡한 상태를 캡슐화하여 관리하고 코드 재사용성 향상',
                code: `class MediaManager {
    constructor() {
        this.currentUser = this.getCurrentUser();
        this.currentCategory = 'screenshots';
        this.currentPage = 1;
        this.mediaItems = [];
        this.isLoading = false;
        this.hasMoreItems = true;
    }
    
    async loadMediaItems(reset = false) {
        if (this.isLoading) return;
        this.isLoading = true;
        
        if (reset) {
            this.mediaItems = [];
            this.currentPage = 1;
        }
        
        // API 호출 및 상태 업데이트
        this.isLoading = false;
    }
}`
            },
            {
                category: '상태 관리',
                title: '이벤트 리스너 메모리 관리',
                reason: '메모리 누수를 방지하기 위해 이벤트 리스너를 체계적으로 추가/제거',
                code: `eventListeners = new Map();

setupEventListeners() {
    const handler = (e) => this.handleLogin(e);
    element.addEventListener('submit', handler);
    this.eventListeners.set('key', { element, event: 'submit', handler });
}

cleanupEventListeners() {
    this.eventListeners.forEach(({ element, event, handler }) => {
        element?.removeEventListener(event, handler);
    });
    this.eventListeners.clear();
}`
            },
            {
                category: '백엔드 연동',
                title: 'Retry 로직이 있는 API 통신',
                reason: '네트워크 불안정 시 자동으로 재시도하여 안정적인 데이터 통신 보장',
                code: `static async request(url, options = {}) {
    let attempt = 0;
    const maxAttempts = 3;

    while (attempt < maxAttempts) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
            return await response.json();
        } catch (error) {
            attempt++;
            if (attempt >= maxAttempts) throw error;
            await new Promise(resolve => 
                setTimeout(resolve, 1000 * attempt)
            );
        }
    }
}`
            },
            {
                category: '백엔드 연동',
                title: 'Promise.all 병렬 쿼리',
                reason: '여러 데이터를 동시에 요청하여 로딩 시간을 단축하고 성능 향상',
                code: `Promise.all([
    new Promise((resolve, reject) => {
        db.query('SELECT COUNT(*) as count FROM UserDB', 
            (err, results) => err ? reject(err) : 
                resolve({ users: results[0].count })
        );
    }),
    new Promise((resolve, reject) => {
        db.query('SELECT COUNT(*) as count FROM Posts', 
            (err, results) => err ? reject(err) : 
                resolve({ posts: results[0].count })
        );
    })
]).then(results => {
    const stats = Object.assign({}, ...results);
    res.json(stats);
});`
            },
            {
                category: '백엔드 연동',
                title: 'Multer 파일 업로드',
                reason: '이미지와 동영상을 안전하게 검증하고 서버에 저장',
                code: `const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        const originalName = Buffer.from(file.originalname, 'latin1')
            .toString('utf8');
        cb(null, \`\${timestamp}_\${originalName}\`);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'video/mp4'];
        allowedTypes.includes(file.mimetype) ? 
            cb(null, true) : cb(new Error('허용되지 않는 파일'));
    }
});`
            },
            {
                category: '데이터베이스',
                title: 'JOIN 쿼리로 댓글 수 집계',
                reason: '게시글과 댓글 수를 한 번의 쿼리로 효율적으로 조회',
                code: `const query = \`
    SELECT p.*,
        (SELECT COUNT(*) FROM Comments c 
         WHERE c.post_id = p.post_id) as comment_count
    FROM Posts p 
    WHERE p.is_deleted = FALSE 
    ORDER BY p.created_at DESC
\`;`
            },
            {
                category: '데이터베이스',
                title: '동적 쿼리 생성',
                reason: '사용자 선택에 따라 필터링 조건을 동적으로 추가하여 유연한 검색 구현',
                code: `let query = 'SELECT * FROM Posts WHERE is_deleted = FALSE';
let queryParams = [];

if (category && category !== '전체') {
    query += ' AND category = ?';
    queryParams.push(category);
}

query += ' LIMIT ? OFFSET ?';
queryParams.push(parseInt(limit), parseInt(offset));

db.query(query, queryParams, (err, results) => {
    res.json(results);
});`
            },
            {
                category: '데이터베이스',
                title: '소프트 삭제',
                reason: '데이터를 실제로 삭제하지 않고 플래그만 변경하여 복구 가능성 확보',
                code: `const checkColumnQuery = \`
    SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS 
    WHERE TABLE_NAME = 'Posts' AND COLUMN_NAME = 'is_deleted'
\`;

db.query(checkColumnQuery, (err, results) => {
    const deleteQuery = results.length > 0 
        ? 'UPDATE Posts SET is_deleted = TRUE WHERE post_id = ?' 
        : 'DELETE FROM Posts WHERE post_id = ?';
    db.query(deleteQuery, [id]);
});`
            }
        ]
    },
    
    'android-memo': {
        title: '📱 일기 & 메모 안드로이드 앱',
        team: '디자이너 1, 안드로이드 4, 백엔드 1',
        role: '개발 및 프로젝트 총괄',
        tech: ['Android', 'Kotlin', 'Jetpack Navigation', 'Hilt', 'MVI', 'Retrofit', 'DataStore', 'Flow'],
        description: '일기 기능과 카테고리별 메모 저장, 검색이 가능한 안드로이드 애플리케이션입니다. Clean Architecture와 멀티 모듈 구조를 적용했습니다.',
        features: [
            {
                title: '기초 세팅',
                items: [
                    'Jetpack Navigation을 이용한 화면 이동 구현',
                    'Clean Architecture와 멀티 모듈 구조 설계',
                    'Hilt를 통한 의존성 주입',
                    'MVI 패턴 적용',
                    'Retrofit API 연동'
                ],
                code: `// Hilt 모듈 예시
@Module
@InstallIn(SingletonComponent::class)
object NetworkModule {
    @Provides
    @Singleton
    fun provideRetrofit(): Retrofit {
        return Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    }
}`
            },
            {
                title: '카카오 로그인 (OAuth 2.0)',
                items: [
                    'Kakao SDK를 통해 유저 정보(email, 이름) 획득',
                    'DataStore를 활용하여 Local 저장소에 로그인 Token 저장',
                    '유저 정보를 Local에 안전하게 저장 및 관리'
                ],
                code: `// DataStore 저장 예시
class UserPreferences(private val dataStore: DataStore<Preferences>) {
    
    suspend fun saveLoginToken(token: String) {
        dataStore.edit { preferences ->
            preferences[LOGIN_TOKEN] = token
        }
    }
    
    val loginToken: Flow<String?> = dataStore.data
        .map { it[LOGIN_TOKEN] }
}`
            },
            {
                title: '메모 추가/삭제/수정/검색',
                items: [
                    'Flow를 활용한 체크박스 업데이트 기능',
                    '카테고리별 메모 분류 및 저장',
                    '실시간 검색 기능 구현',
                    'Room Database를 이용한 로컬 저장'
                ],
                code: `// Flow를 활용한 체크박스 업데이트
@Dao
interface MemoDao {
    @Query("SELECT * FROM memos WHERE category = :category")
    fun getMemosByCategory(category: String): Flow<List<Memo>>
    
    @Update
    suspend fun updateMemo(memo: Memo)
}

// ViewModel에서 Flow 사용
val memos: StateFlow<List<Memo>> = memoDao
    .getMemosByCategory(selectedCategory)
    .stateIn(viewModelScope, SharingStarted.Lazily, emptyList())`
            },
            {
                title: '일기 추가/삭제',
                items: [
                    'Multipart를 활용한 이미지 업로드',
                    '갤러리 및 카메라를 통한 이미지 첨부',
                    '이미지와 함께 일기 작성 및 저장'
                ],
                code: `// Multipart 이미지 업로드
suspend fun uploadDiary(
    content: RequestBody,
    image: MultipartBody.Part
): Result<DiaryResponse> {
    return try {
        val response = api.uploadDiary(content, image)
        Result.success(response)
    } catch (e: Exception) {
        Result.failure(e)
    }
}

// 이미지 Multipart 변환
fun File.toMultipartBody(): MultipartBody.Part {
    val requestFile = this.asRequestBody("image/*".toMediaType())
    return MultipartBody.Part.createFormData("image", name, requestFile)
}`
            }
        ],
        technical: [
            'Clean Architecture로 레이어 분리 (Presentation, Domain, Data)',
            '멀티 모듈 구조로 의존성 관리 및 빌드 속도 향상',
            'MVI 패턴으로 단방향 데이터 흐름 구현',
            'Hilt로 의존성 주입 자동화',
            'Kotlin Flow로 비동기 데이터 스트림 처리',
            'Jetpack Navigation으로 화면 전환 관리',
            'DataStore로 안전한 로컬 데이터 저장'
        ]
    },
    
    'bank': {
        title: '🏦 은행 시스템 구축',
        team: '4인 팀 프로젝트',
        role: '팀 리더 및 시스템 설계자',
        duration: '2023.09 - 2023.12',
        tech: ['Java', 'MySQL', 'JDBC', '시스템 설계'],
        description: '4인 팀 프로젝트의 리더로서 은행 시스템을 설계하고 구축했습니다. "프로그램만 추가하면 실제 사용 가능한 수준"의 완성도를 달성했습니다.',
        features: [
            {
                title: '리더십 경험',
                items: [
                    '팀원 4인의 스케줄 관리 및 일정 조율',
                    '각 팀원의 강점을 파악한 역할 분담',
                    '주제 선정 및 기획서 작성 주도',
                    '정기적인 팀 미팅 및 진행 상황 관리'
                ]
            },
            {
                title: '시스템 설계',
                items: [
                    '은행 시스템 아키텍처 설계',
                    '데이터베이스 스키마 설계 (계좌, 거래, 고객 정보)',
                    'CRUD 기능 완전 구현',
                    '트랜잭션 처리 로직 구현'
                ]
            },
            {
                title: '주요 기능',
                items: [
                    '계좌 개설/조회/삭제',
                    '입금/출금/이체 기능',
                    '거래 내역 조회',
                    '고객 정보 관리',
                    '잔액 확인 및 업데이트'
                ]
            },
            {
                title: '코드 리뷰 및 멘토링',
                items: [
                    '팀원 코드 리뷰 및 피드백 제공',
                    '기술적 문제 해결 지원',
                    '베스트 프랙티스 공유',
                    '협업 도구(Git) 사용법 가이드'
                ]
            }
        ],
        technical: [
            'MVC 패턴 적용',
            'JDBC를 통한 데이터베이스 연동',
            'PreparedStatement로 SQL Injection 방지',
            '트랜잭션 관리 (ACID 속성 보장)',
            '예외 처리 및 로깅 시스템 구축'
        ],
        learned: [
            '팀 프로젝트의 기획과 계획의 중요성',
            '팀원 간 소통 및 협업 방식',
            '각자의 능력을 살리는 역할 분담 전략',
            '리더로서 팀을 이끄는 법',
            '프로젝트 일정 관리 및 리스크 대응'
        ]
    },
    
    'patent': {
        title: '📜 블루투스와 와이파이를 이용한 위치추적',
        subtitle: 'Location tracking using Bluetooth and Wi-Fi',
        team: '개인 프로젝트',
        role: '발명자',
        tech: ['GPS', 'Bluetooth', 'Wi-Fi', 'IoT', '앱 개발 구상'],
        description: '피시방에서 고객들이 물건을 자주 분실하는 문제를 발견하고, 이를 해결하기 위한 위치추적 기술을 개발하여 특허를 출원했습니다.',
        features: [
            {
                title: '발명 배경',
                items: [
                    '피시방에서 손님들이 물건을 너무 많이 잃어버리는 문제 발견',
                    '찾으려 할 때의 번거로움과 유실물 증가',
                    '기존 GPS + 블루투스 방식의 한계 (건물 내부 정확도 저하)',
                    '무료 Wi-Fi 증가 추세 착안'
                ]
            },
            {
                title: '핵심 아이디어',
                items: [
                    '<strong>삼중 추적 시스템:</strong> GPS + 블루투스 + Wi-Fi 동시 활용',
                    '<strong>실내 정밀도 향상:</strong> Wi-Fi로 건물 내 위치 추적 정확도 개선',
                    '<strong>소형화 설계:</strong> 포켓 사이즈로 다양한 물건에 부착 가능',
                    '<strong>앱 연동:</strong> 실시간 위치 확인 및 알림 기능',
                    '<strong>C타입 충전:</strong> 무선 또는 유선 충전 지원'
                ]
            },
            {
                title: '기술적 구상',
                items: [
                    'GPS: 실외 위치 추적 (광범위)',
                    'Bluetooth: 근거리 위치 추적 (10-30m)',
                    'Wi-Fi: 실내 위치 추적 (건물 내부)',
                    '서버를 통한 다중 기기 데이터 관리',
                    '앱에서 실시간 위치 확인 및 경로 표시'
                ]
            },
            {
                title: '기대 효과',
                items: [
                    '물건 분실 방지 → 재구매 비용 절감',
                    '유실물로 인한 쓰레기 감소 → 환경 보호',
                    '긴급 상황 시 위치 추적 가능 (안전)',
                    '다양한 활용처 (지갑, 열쇠, 가방 등)'
                ]
            }
        ],
        learned: [
            '일상에서 문제를 발견하는 관찰력',
            '기술로 문제를 해결하는 사고방식',
            '특허 명세서 작성 능력',
            '사용자 중심의 설계 방법',
            '기술 융합(GPS+BT+WiFi)의 중요성'
        ]
    }
};

// ==================== 
// DOM 로드 완료 후 실행
// ====================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== 
    // Mobile Menu Toggle
    // ====================
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('show');
            }
        });
    }
    
    // ==================== 
    // Dark Mode Toggle
    // ====================
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.querySelector('.theme-icon');
    const body = document.body;
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        if (themeIcon) themeIcon.textContent = '☀️';
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            
            const isDark = body.classList.contains('dark-mode');
            
            if (themeIcon) {
                themeIcon.textContent = isDark ? '☀️' : '🌙';
            }
            
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
    
    // ==================== 
    // Smooth Scroll & Active Navigation
    // ====================
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('show');
            }
        });
    });
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
    
    // ==================== 
    // Scroll Animations
    // ====================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll(
        '.about-card, .skill-category, .project-card, .timeline-item, .contact-item'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // ==================== 
    // Logo Click - Scroll to Top
    // ====================
    const logo = document.querySelector('.logo');
    
    if (logo) {
        logo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    console.log('Portfolio initialized! 🚀');
});

// ==================== 
// 프로젝트 모달 기능
// ====================

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectsData[projectId];
    
    if (!project) return;
    
    let html = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            ${project.subtitle ? `<p style="font-style: italic; color: var(--text-secondary); margin-bottom: 16px;">${project.subtitle}</p>` : ''}
            <div class="modal-meta">
                <div class="meta-item">
                    <span>👥</span> ${project.team}
                </div>
                <div class="meta-item">
                    <span>🎯</span> ${project.role}
                </div>
                ${project.duration ? `
                <div class="meta-item">
                    <span>📅</span> ${project.duration}
                </div>
                ` : ''}
            </div>
            <div class="modal-tags">
                ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3>📋 프로젝트 개요</h3>
            <p>${project.description}</p>
        </div>
    `;
    
    if (project.features && project.features.length > 0) {
        html += `<div class="modal-section">
            <h3>✨ 주요 기능</h3>`;
        
        project.features.forEach(feature => {
            html += `
                <h4 style="font-size: 18px; font-weight: 600; margin: 20px 0 12px; color: var(--text-primary);">
                    ${feature.title}
                </h4>
                <ul>
                    ${feature.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
            
            if (feature.code) {
                html += `
                    <div class="code-block">
                        <code>${escapeHtml(feature.code)}</code>
                    </div>
                `;
            }
        });
        
        html += `</div>`;
    }
    
    if (project.technical && project.technical.length > 0) {
        html += `
            <div class="modal-section">
                <h3>🔧 기술적 특징</h3>
                <ul>
                    ${project.technical.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    if (project.coreCode && project.coreCode.length > 0) {
        html += `
            <div class="modal-section">
                <h3>💻 핵심 기술 코드</h3>
                <p style="color: var(--text-secondary); margin-bottom: 20px;">프로젝트에서 사용된 핵심 기술들과 사용 이유입니다.</p>
        `;
        
        // 카테고리별로 그룹화
        const categories = {};
        project.coreCode.forEach(code => {
            if (!categories[code.category]) {
                categories[code.category] = [];
            }
            categories[code.category].push(code);
        });
        
        Object.entries(categories).forEach(([category, codes]) => {
            html += `
                <h4 style="font-size: 18px; font-weight: 600; margin: 24px 0 16px; color: var(--accent-color);">
                    ${category}
                </h4>
            `;
            
            codes.forEach(code => {
                html += `
                    <div style="margin-bottom: 24px;">
                        <h5 style="font-size: 16px; font-weight: 600; margin-bottom: 8px; color: var(--text-primary);">
                            ${code.title}
                        </h5>
                        <p style="color: var(--text-secondary); margin-bottom: 12px; font-size: 14px;">
                            💡 <strong>사용 이유:</strong> ${code.reason}
                        </p>
                        <div class="code-block">
                            <code>${escapeHtml(code.code)}</code>
                        </div>
                    </div>
                `;
            });
        });
        
        html += `</div>`;
    }
    
    if (project.learned && project.learned.length > 0) {
        html += `
            <div class="modal-section">
                <h3>💡 배운 점</h3>
                <ul>
                    ${project.learned.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    if (project.github) {
        html += `
            <div class="modal-section" style="text-align: center;">
                <a href="${project.github}" target="_blank" class="btn btn-primary" style="display: inline-block;">
                    🔗 GitHub 저장소 보기
                </a>
            </div>
        `;
    }
    
    modalBody.innerHTML = html;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Close modal on outside click
document.addEventListener('click', function(e) {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});