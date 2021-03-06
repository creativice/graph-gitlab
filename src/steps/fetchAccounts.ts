import {
  IntegrationStep,
  IntegrationStepExecutionContext,
  createIntegrationEntity,
} from '@jupiterone/integration-sdk';

const step: IntegrationStep = {
  id: 'fetch-accounts',
  name: 'Fetch accounts',
  types: ['my_integration_account'],
  async executionHandler({
    logger,
    jobState,
  }: IntegrationStepExecutionContext) {
    await jobState.addEntities([
      createIntegrationEntity({
        entityData: {
          source: {
            id: 'integration-account-a',
            name: 'My Account',
          },
          assign: {
            _key: 'account:integration-account-a',
            _type: 'my-integration-account',
            _class: 'Account',
          },
        },
      }),
    ]);
  },
};

export default step;
