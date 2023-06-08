const featureOptionEl = document.querySelector('.option-feature'),
      arrowDownEl = document.querySelector('.arrowDown'),
      arrowDownOptionEl = document.querySelector('.arrowDown-company'),
      toggleFeatureEl = document.querySelector('.features-items'),
      toggleCompanyEl = document.querySelector('.company-items'),
      companyOptionEl = document.querySelector('.company-option');

      featureOptionEl.addEventListener('click', () => {
        toggleFeatureEl.classList.toggle('active');
        arrowDownEl.classList.toggle('rotate');
        featureOptionEl.classList.toggle('active')
        });
       
        companyOptionEl.addEventListener('click', () => {
            toggleCompanyEl.classList.toggle('active');
            arrowDownOptionEl.classList.toggle('rotate');
            companyOptionEl.classList.toggle('active');
        });

        const hamburgerBtnEl = document.querySelector('.hamburger-btn'),
        openBtn = document.querySelector('.open-btn'),
        mobileEl = document.querySelector('.mobile'),
        closeBtn = document.querySelector('.close-btn');

        openBtn.addEventListener('click', () => {
            mobileEl.classList.add('active');
            openBtn.classList.add('hide');
            closeBtn.classList.remove('hide');
        });
        closeBtn.addEventListener('click', () => {
            mobileEl.classList.remove('active');
            openBtn.classList.remove('hide');
            closeBtn.classList.add('hide');
        });

        const mobileFeatureOptionEl = document.querySelector('.mobile-option'),
        arrowEl = document.querySelector('.arrowDownMobile'),
        mobileFeatureEl = document.querySelector('.mobile-feature');


        mobileFeatureOptionEl.addEventListener('click', () => {
            mobileFeatureEl.classList.toggle('active');
            arrowEl.classList.toggle('rotate');
        });

        const mobileCompanyEl = document.querySelector('.mobile-company'),
        arrowDownMobileCompany = document.querySelector('.arrowDown-mobile-company'),
        mobileCompanyOptionEl = document.querySelector('.mobile-company-items');

        mobileCompanyEl.addEventListener('click', () => {
            mobileCompanyOptionEl.classList.toggle('active');
            arrowDownMobileCompany.classList.toggle('rotate');
        })