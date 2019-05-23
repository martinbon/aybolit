import { html } from 'lit-html';

export default html`
  <cxl-minidegree-progress-widget id="post-1001" class="entry entry--type-certificate">

    <cxl-vaadin-accordion id="cxl-vaadin-accordion-1001">

      <vaadin-accordion-panel id="post-1011" class="entry entry--type-step" theme="cxl-track reverse">

        <vaadin-item theme="cxl-track" slot="summary">
          <label>Track #1</label>
          <h3 class="entry__title">Google Analytics</h3>
        </vaadin-item>

        <cxl-course-progress-widget id="post-2022" class="entry entry--type-course">

          <cxl-vaadin-accordion id="cxl-vaadin-accordion-2022">

            <vaadin-accordion-panel theme="cxl-course">

              <vaadin-item slot="summary">
                <h4 class="entry__title">Analytics fundamentals (w/ modules)</h4>
                <vaadin-progress-bar value="0.3"></vaadin-progress-bar>
              </vaadin-item>

              <vaadin-tabs theme="cxl-course minimal" orientation="vertical" selected="-1">

                <vaadin-tab>
                  <h6 class="entry__title"><a href="">Introduction</a></h6>
                </vaadin-tab>
                <vaadin-tab disabled>
                  <h5 class="module__title">Main module</h5>
                </vaadin-tab>
                <vaadin-tab>
                  <h6 class="entry__title"><a href="">Analytics fundamentals</a></h6>
                  <iron-icon icon="cxl-vaadin:check"></iron-icon>
                </vaadin-tab>
                <vaadin-tab>
                  <h6 class="entry__title"><a href="">Getting started with Google Analytics</a></h6>
                  <iron-icon icon="cxl-vaadin:check"></iron-icon>
                </vaadin-tab>
                <vaadin-tab>
                  <h6 class="entry__title"><a href="">Who are my visitors?</a></h6>
                </vaadin-tab>
                <vaadin-tab>
                  <h6 class="entry__title"><a href="">Where are my visitors coming from?</a></h6>
                </vaadin-tab>
                <vaadin-tab disabled>
                  <h5 class="module__title">Final exam</h5>
                </vaadin-tab>
                <vaadin-tab>
                  <h6 class="entry__title"><a href="">Final exam</a></h6>
                </vaadin-tab>

              </vaadin-tabs>

            </vaadin-accordion-panel>

          </cxl-vaadin-accordion>

        </cxl-course-progress-widget>

        <cxl-course-progress-widget>

          <cxl-vaadin-accordion id="cxl-vaadin-accordion-2023">

            <vaadin-accordion-panel id="post-2023" class="entry entry--type-course" theme="cxl-course">

              <vaadin-item slot="summary">
                <h4 class="entry__title">Google Analytics for beginners</h4>
                <vaadin-progress-bar value="1.0" theme="success"></vaadin-progress-bar>
              </vaadin-item>

              <vaadin-tabs theme="cxl-course minimal" orientation="vertical" selected="-1">

                <vaadin-tab>
                  <h6 class="entry__title"><a href="">Introduction</a></h6>
                </vaadin-tab>
                <vaadin-tab disabled>
                  <h5 class="module__title">Main module</h5>
                </vaadin-tab>
                <vaadin-tab>
                  <h6 class="entry__title"><a href="">Getting started with Google Analytics</a></h6>
                </vaadin-tab>
                <vaadin-tab>
                  <h6 class="entry__title"><a href="">Who are my visitors?</a></h6>
                </vaadin-tab>
                <vaadin-tab>
                  <h6 class="entry__title"><a href="">Where are my visitors coming from?</a></h6>
                </vaadin-tab>
                <vaadin-tab>
                  <h6 class="entry__title"><a href="">What are the results of my visitors' actions?</a></h6>
                </vaadin-tab>
                <vaadin-tab disabled>
                  <h5 class="module__title">Final exam</h5>
                </vaadin-tab>
                <vaadin-tab>
                  <h6 class="entry__title"><a href="">Final Exam - Google Analytics for Beginners</a></h6>
                </vaadin-tab>
              </vaadin-tabs>

            </vaadin-accordion-panel>

          <cxl-vaadin-accordion>

        </cxl-course-progress-widget>

      </vaadin-accordion-panel>

      <vaadin-accordion-panel id="post-1012" class="entry entry--type-step" theme="cxl-track reverse">

        <vaadin-item theme="cxl-track" slot="summary">
          <label>Track #2</label>
          <h3 class="entry__title">Presenting data</h3>
        </vaadin-item>

        <cxl-course-progress-widget>

          <cxl-vaadin-accordion id="cxl-vaadin-accordion-2024">

            <vaadin-accordion-panel id="post-2024" class="entry entry--type-course" theme="cxl-course">

              <vaadin-item slot="summary">
                <h4 class="entry__title">Data presentation &amp; visualization (no modules)</h4>
                <vaadin-progress-bar value="0.5"></vaadin-progress-bar>
              </vaadin-item>

              <vaadin-tabs theme="cxl-course minimal" orientation="vertical" selected="-1">

                <vaadin-tab>
                  <h6 class="entry__title"><a href="">Introduction</a></h6>
                </vaadin-tab>
                <vaadin-tab>
                  <h6 class="entry__title"><a href="">Introduction + Conceptualize</a></h6>
                </vaadin-tab>
                <vaadin-tab>
                  <h6 class="entry__title"><a href="">Visualize: design like Andy Warhol</a></h6>
                </vaadin-tab>
                <vaadin-tab>
                  <h6 class="entry__title"><a href="">Visualize: data design</a></h6>
                </vaadin-tab>
                <vaadin-tab>
                  <h6 class="entry__title"><a href="">Analytics strategy: the process for successful digital analytics</a></h6>
                  <iron-icon icon="cxl-vaadin:check"></iron-icon>
                </vaadin-tab>
                <vaadin-tab>
                  <h6 class="entry__title"><a href="">Analytics strategy: socializing analytical results for enabling business decisions</a></h6>
                </vaadin-tab>

              </vaadin-tabs>

            </vaadin-accordion-panel>

          </cxl-vaadin-accordion>

        <cxl-course-progress-widget>

      </vaadin-accordion-panel>

    </cxl-vaadin-accordion>

  </cxl-minidegree-progress-widget>
`;